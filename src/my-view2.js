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
import './override-template/child-component-b.js';


class MyView2 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">2</div>
        <h1>Override a base class template in a child class</h1>
        <p>To override a base class's template definition, supply your own template for your child class.</p>
      </div>
        
      <div class="flexbox-container">
  
      <div>
        <h2> Base Class </h2>
        <h3> card-base </h3>
        <card-base></card-base>
      </div>
      
      <div>
        <h2> Child Class </h2>
        <h3> child-component-b </h3>
        <child-component-b></child-component-b>
      </div>
    </div>

    `;
  }
}

window.customElements.define('my-view2', MyView2);
