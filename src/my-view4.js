/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import './extension-points/child-component-d.js';
import './card-base-points.js';
import '@kuscamara/code-sample';
import '@kuscamara/code-sample/themes/one-dark.js';
import '@polymer/iron-collapse';

class MyView4 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
      
          padding: 10px;
        }
      </style>
      
      <div class="card">
        <div class="circle">4</div>
        <h1>Provide template extension points in a base class for content from a child class</h1>
        <p>Polymer makes it easy to provide template extension points in a base class, which a child class can then optionally override.
          You can provide template extension points by composing your base class template literal using expressions, like this.partialTemplate.
          The interpolated expressions act as partial templates ("partials") that the child class can override.</p>
      </div>
      
      <div class="card">
        <h1>Code</h1>
        <h3>Base Class</h3>
        <h4 on-click="toggleBase">📝 card-base</h4>
        <iron-collapse id="collapseBase">
          <code-sample copy-clipboard-button>
            <template preserve-content type="js">
            export class BaseClass extends PolymerElement {
              static get template() {
                return html'
                  <div>\${this.headerTemplate}</div>
                  <p>Hello this is some content</p>
                  <div>\${this.footerTemplate}</div>
                ';
              }
              static get headerTemplate() { return html'<h1>BaseClass: Header</h1>' }
              static get footerTemplate() { return html'<h1>BaseClass: Footer</h1>' }
            }
            </template>
          </code-sample>
        </iron-collapse>
      
        <h3>Child Class</h3>
        <h4 on-click="toggleChild">📝 child-component-d</h4>
        <iron-collapse id="collapseChild">
          <code-sample copy-clipboard-button>
            <template preserve-content type="js">
            export class ChildClass extends BaseClass {
              // template definition inherited from BaseClass

              // partial templates overridden by ChildClass
              static get headerTemplate() { return html'<h2>ChildClass: Header</h2>' }
              static get footerTemplate() { return html'<h2>ChildClass: Footer</h2>' }
            }
            </template>
          </code-sample>
        </iron-collapse>
      </div>
      
      
      <div class="flexbox-container">
      
        <div>
          <h2> Base Class </h2>
          <h3> card-base-points </h3>
          <card-base-points></card-base-points>
        </div>
      
        <div>
          <h2> Child Class </h2>
          <h3> child-component-d</h3>
          <child-component-d></child-component-d>
        </div>
      </div>
    `;
  }

  toggleBase() {
    this.$.collapseBase.toggle();
  }

  toggleChild() {
    this.$.collapseChild.toggle();
  }

}

window.customElements.define('my-view4', MyView4);
