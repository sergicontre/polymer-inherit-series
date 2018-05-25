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
}

window.customElements.define('my-view4', MyView4);
