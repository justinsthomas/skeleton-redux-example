
import {Element as PolymerElement} from '@polymer/polymer/polymer-element';

import css from './style.postcss';
import template from './template.html';

import Appear from './../../../global-style/animations/appear.postcss';

export default class SkInput extends PolymerElement {

  static get properties() {
    return {
      name: {
        type: String,
        value: 'currentInput'
      },
      type: {
        type: String,
        value: 'text'
      },
      label: {
        type: String,
        value: ''
      },
      min: String,
      step: String,
      max: String,
      value: {
        type: String,
        notify: true,
        observer: '_obsValue'
      },
      _isFilled: {
        type: Boolean,
        value: false
      }
    };
  }

  static get template() {
    return `
      <style>
        ${Appear}
        ${css}
      </style>
      ${template}`;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  focus() {
    console.log('asdasd');
    this.$.nme.focus();
  }

  _obsValue(val) {
    this._isFilled = val !== '';
  }
}

window.customElements.define('sk-input', SkInput);
