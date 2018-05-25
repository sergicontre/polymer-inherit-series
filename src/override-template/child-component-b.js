import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { CardBase } from '../card-base.js';

export class ChildComponentB extends CardBase {
    static get template() { 
        return html`
            <link rel="stylesheet" href="/node_modules/material-design-lite/material.min.css">
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

            <style>
                .demo-card-square.mdl-card {
                    width: 320px;
                    height: 320px;
                }
                .demo-card-square > .mdl-card__title {
                    color: #fff;
                    background:
                    url('https://vignette.wikia.nocookie.net/pacman/images/b/be/2469743-orange.png') bottom right 15% no-repeat #ff6666;
                }
            </style>

            <div class="demo-card-square mdl-card mdl-shadow--2dp">
                <div class="mdl-card__title mdl-card--expand">
                    <h2 class="mdl-card__title-text">Change</h2>
                </div>

                <div class="mdl-card__actions mdl-card--border" on-click="buttonHandler">
                <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                    Button
                </button>
                </div>
            </div>
        `;
    }
}

window.customElements.define('child-component-b', ChildComponentB);
