import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { FlattenedNodesObserver } from '@polymer/polymer/lib/utils/flattened-nodes-observer.js';
import './highlight-import.js';

/* global hljs */

/**
 * `<code-sample>` uses [highlight.js](https://highlightjs.org/) for syntax highlighting.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class CodeSample extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
        display: block;
      }

      :host([hidden]),
      [hidden] {
        display: none;
      }

      pre {
        margin: 0;
      }

      pre, code {
        font-family: var(--code-sample-font-family, Operator Mono, Inconsolata, Roboto Mono, monaco, consolas, monospace);
        font-size: var(--code-sample-font-size, 14px);
      }

      .hljs {
        padding: 0 20px;
        line-height: 1.3;
      }

      .demo:not(:empty) {
        padding: var(--code-sample-demo-padding, 0 0 20px);
      }

      .demo {
        @apply --code-sample-demo;
      }

      #code-container {
        position: relative;
        @apply --code-sample-code-container;
      }

      #code-container:hover {
        @apply --code-sample-code-container-hover;
      }

      #code-container:hover > button {
        @apply --code-sample-code-container-hover-button;
      }

      button {
        background: #e0e0e0;
        border: none;
        cursor: pointer;
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        text-transform: uppercase;
        @apply --code-sample-copy-clipboard-button;
      }

      /*

      Orginal Style from ethanschoonover.com/solarized (c) Jeremy Hull <sourdrums@gmail.com>

      */

      .hljs {
        display: block;
        overflow-x: auto;
        padding: 0.5em;
        background: var(--code-sample-background, #002b36);
        color: var(--code-sample-color, #839496);
      }

      .hljs-comment,
      .hljs-quote {
        color: #586e75;
      }

      /* Solarized Green */
      .hljs-keyword,
      .hljs-selector-tag,
      .hljs-addition {
        color: #859900;
      }

      /* Solarized Cyan */
      .hljs-number,
      .hljs-string,
      .hljs-meta .hljs-meta-string,
      .hljs-literal,
      .hljs-doctag,
      .hljs-regexp {
        color: #2aa198;
      }

      /* Solarized Blue */
      .hljs-title,
      .hljs-section,
      .hljs-name,
      .hljs-selector-id,
      .hljs-selector-class {
        color: #268bd2;
      }

      /* Solarized Yellow */
      .hljs-attribute,
      .hljs-attr,
      .hljs-variable,
      .hljs-template-variable,
      .hljs-class .hljs-title,
      .hljs-type {
        color: #b58900;
      }

      /* Solarized Orange */
      .hljs-symbol,
      .hljs-bullet,
      .hljs-subst,
      .hljs-meta,
      .hljs-meta .hljs-keyword,
      .hljs-selector-attr,
      .hljs-selector-pseudo,
      .hljs-link {
        color: #cb4b16;
      }

      /* Solarized Red */
      .hljs-built_in,
      .hljs-deletion {
        color: #dc322f;
      }

      .hljs-formula {
        background: #073642;
      }

      .hljs-emphasis {
        font-style: italic;
      }

      .hljs-strong {
        font-weight: bold;
      }
      
    </style>

    <div id="demo" class="demo"></div>

    <slot id="content"></slot>

    <div id="code-container">
      <button hidden="[[!copyClipboardButton]]" id="copy-button" title="Copy to clipboard" on-click="_copyToClipboard">Copy</button>
      <pre id="code"></pre>
    </div>
`;
  }

  static get is() {
    return 'code-sample';
  }

  static get properties() {
    return {
      copyClipboardButton: {
        type: Boolean,
        value: false
      },
      /**
       * Set to true to render the code inside the template.
       */
      render: {
        type: Boolean,
        value: false
      },

      /**
       * Code type (optional). (eg.: html, js, css)
       * Options are the same as the available classes for `<code>` tag using highlight.js
       */
      type: {
        type: String
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      if (this) {
        debugger;
        this._observer = new FlattenedNodesObserver(this.$.content, () => this._updateContent());
      } else if (this.childNodes.length) {
        console.error('<code-sample>:', 'content must be provided inside a <template> tag');
      }
    }, 1);
  }

  disconnectedCallback() {
    if (this._observer) {
      this._observer.disconnect();
      this._observer = null;
    }
  }

  _updateContent() {
    if (this._code) {
      this._code.parentNode.removeChild(this._code);
    }

    if (this._demo) {
      this.$.demo.innerHTML = '';
    }

    let template = this._getCodeTemplate();

    if (this.render) {
      this._demo = this.$.demo.appendChild(document.importNode(template.content, true));
    }

    this._highlight(template.innerHTML);
    template.innerHTML = '';
  }

  _highlight(str) {
    this._code = document.createElement('code');
    if (this.type) {
      this._code.classList.add(this.type);
    }
    this._code.innerHTML = this._entitize(this._cleanIndentation(str));
    this.$.code.appendChild(this._code);
    hljs.highlightBlock(this._code);
  }

  _cleanIndentation(str) {
    let pattern = str.match(/\s*\n[\t\s]*/);
    return str.replace(new RegExp(pattern, 'g'), '\n');
  }

  _entitize(str) {
    return String(str).replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/=""/g, '').replace(/=&gt;/g, '=>').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  _getCodeTemplate() {
    let nodes = FlattenedNodesObserver.getFlattenedNodes(this.$.content);
    return [].filter.call(nodes, (node) => node.nodeType === Node.ELEMENT_NODE)[0];
  }

  _copyToClipboard() {
    let tempNode = document.createElement('textarea');
    document.body.appendChild(tempNode);
    tempNode.value = this._cleanIndentation(this._getCodeTemplate().innerHTML);
    tempNode.select();

    let result = false;

    let copyButton = this.shadowRoot.querySelector('#copy-button');

    try {
      result = document.execCommand('copy', false);
      copyButton.textContent = 'Done';
    } catch (err) {
      // Copy command is not available
      console.error(err);
      copyButton.textContent = 'Error';
    }

    tempNode.remove();

    // Return to the copy button after a second.
    setTimeout(this._resetCopyButtonState.bind(this), 1000);

    return result;
  }

  _resetCopyButtonState() {
    this.shadowRoot.querySelector('#copy-button').textContent = 'Copy';
  }
}

customElements.define(CodeSample.is, CodeSample);
