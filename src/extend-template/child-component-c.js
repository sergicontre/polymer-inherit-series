import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { CardBase } from '../card-base.js';

export class ChildComponentC extends CardBase {
    static get template() {
        return html`
            <p>This content is from ChildClass.</p>
            <p>${super.template}</p>
            <p>Hello again from ChildClass.</p>
        `;

    }
}

window.customElements.define('child-component-c', ChildComponentC);
