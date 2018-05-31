import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { CardBase } from '../card-base.js';

class ChildComponentA extends CardBase {

}

window.customElements.define('child-component-a', ChildComponentA);
