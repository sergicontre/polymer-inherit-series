import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { CardBasePoints } from '../card-base-points.js';

export class ChildComponentD extends CardBasePoints {
    // template definition inherited from BaseClass

    // partial templates overridden by ChildClass
    static get footerTemplate() {
        return html `
            <div class="mdl-card__actions mdl-card--border" on-click="buttonHandler">
                    <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
                        <i class="material-icons">+</i>
                    </button>
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
                    url('images/dog2.png') bottom right 15% no-repeat #ff9900;
                }
            </style>
        `;
    }

    static get mainContentTemplate() {
        return html `
            <div class="mdl-card__supporting-text">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            </div>
        `;
    }
}

window.customElements.define('child-component-d', ChildComponentD);


