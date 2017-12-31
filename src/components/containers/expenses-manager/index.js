
import {Element as PolymerElement} from '@polymer/polymer/polymer-element';
import './../../dumbs/sk-menu';

import HueRotateCss from './../../../global-style/animations/hue-rotate.postcss';
import LinksCss from './../../../global-style/basics/links.postcss';
import TypographyCSS from './../../../global-style/basics/typography.postcss';
import css from './style.postcss';
import template from './template.html';

import reduxMixin from './../../../store/mixin';
import ACTIONS from './../../../store/actions';

import './../../dumbs/sk-input';
import './../../dumbs/sk-list';

export default class ExpensesManager extends reduxMixin(PolymerElement) {

  static get properties() {
    return {
      name: {
        type: String
      },
      appVersion: {
        type: String,
        value: process.env.appVersion
      },
      ENV: {
        type: String,
        value: process.env.NODE_ENV
      },

      expenses: {
        type: Array,
        statePath: 'expenses.list'
      },
      expenseType: {
        type: String
      },
      expenseAmount: {
        type: Number,
        value: 0
      },
      total: {
        type: Number,
        statePath: 'expenses.total'
      },
      nextId: {
        type: Number,
        statePath: 'expenses.nextId'
      }
    };
  }

  static get template() {
    return `
      <style>
        ${TypographyCSS}
        ${LinksCss}
        ${HueRotateCss}
        ${css}
      </style>
      ${template}`;
  }

  _onAdd(event) {
    event.preventDefault();
    ACTIONS.addExpense({
      id: this.nextId,
      type: this.expenseType,
      amount: Number(this.expenseAmount),
      date: new Date()
    });
    ACTIONS.setTotal(this.total + Number(this.expenseAmount));
    ACTIONS.incrementNextId();
    this.expenseType = '';
    this.expenseAmount = 0;
    this.$.inputType.focus();
  }

  _onDelete({detail}) {
    const expenseToDelete = this.expenses.find(item => item.id === detail.id);
    ACTIONS.deleteExpense(detail.id);
    ACTIONS.setTotal(this.total - Number(expenseToDelete.amount));
  }
}

window.customElements.define('expenses-manager', ExpensesManager);
