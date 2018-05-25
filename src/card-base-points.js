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

export class CardBasePoints extends PolymerElement {
    static get template() {
        return html`
            <link rel="stylesheet" href="/node_modules/material-design-lite/material.min.css">
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

            ${this.componentStyles}

            <div class="demo-card-square mdl-card mdl-shadow--2dp">  
                ${this.headerTemplate}
                ${this.mainContentTemplate}
                ${this.footerTemplate}
            </div>
        `;
    }

    static get headerTemplate() {
        return html ` 
            <div class="mdl-card__title mdl-card--expand">
                    <h2 class="mdl-card__title-text">Update</h2>
            </div>
        `;
    }

    static get footerTemplate() {
        return html `
            <div class="mdl-card__actions mdl-card--border" on-click="buttonHandler">
                    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                    Button
                    </a>
            </div>
        `;
    }

    static get mainContentTemplate() {
        return html `
            <div class="mdl-card__supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenan convallis.
            </div>
        `;
    }

    static get componentStyles() {
        return html `
            <style>
                .demo-card-square.mdl-card {
                    width: 320px;
                    height: 320px;
                }
                .demo-card-square > .mdl-card__title {
                    color: #fff;
                    background:
                    url('https://getmdl.io/assets/demos/dog.png') bottom right 15% no-repeat #46B6AC;
                }
            </style>
        `;
    }
    
    buttonHandler(){
        console.log('Hey! You clicked the View Update Button');
    }

}




window.customElements.define('card-base-points', CardBasePoints);
