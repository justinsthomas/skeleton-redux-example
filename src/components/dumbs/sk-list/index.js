
import {Element as PolymerElement} from '@polymer/polymer/polymer-element';

import css from './style.postcss';
import template from './template.html';

export default class SkList extends PolymerElement {

  static get properties() {
    return {
      items: {
        type: Array,
        value: []
      },
      currency: {
        type: String,
        value: '€'
      }
    };
  }

  static get template() {
    return `<style>${css}</style> ${template}`;
  }

  constructor() {
    super();
    console.log('SkList: Old ready() callback');
  }

  _computeDate(date) {
    return new Date(date).toLocaleString();
  }

  _onDelete({currentTarget}) {
    const id = Number(currentTarget.dataset.id);
    return this.dispatchEvent(new CustomEvent('delete', {detail: {id}, composed: true}));
  }

}

window.customElements.define('sk-list', SkList);
