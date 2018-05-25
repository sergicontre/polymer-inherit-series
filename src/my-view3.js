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
import './card-base.js';
import './extend-template/child-component-c.js';

class MyView3 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">3</div>
        <h1>Extend a base class template in a child class</h1>
        <p>To extend a base class template, include the base class template in your child class template literal with the expression super.template You will also need to tag the template literal with the html function.</p>
      </div>

      <div class="flexbox-container">
        <div>
          <h2> Base Class </h2>
          <h3> card-base </h3>
          <card-base></card-base>
        </div>
        
        <div>
          <h2> Child Class </h2>
          <h3> child-component-c </h3>
          <child-component-c></child-component-c>
        </div>
      </div>
    `;
  }
}

window.customElements.define('my-view3', MyView3);
