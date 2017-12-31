
'use strict';

import {createStore, combineReducers, compose, applyMiddleware} from 'redux';

const expensesState = {
  fromAPI: [],
  list: [],
  total: 0,
  nextId: 1
};

const alertState = {
  message: '',
  show: false,
  type: 'info'
};

const ExpensesReducer = (state = expensesState, action) => {
  switch (action.type) {
    case 'SET_EXPENSES':
      return Object.assign({}, {...state, list: action.data});
    case 'SET_EXPENSES_API':
      return Object.assign({}, {...state, fromAPI: action.data});
    case 'SET_TOTAL':
      return Object.assign({}, {...state, total: action.data});
    case 'INCREMENT_NEXT_ID':
      return Object.assign({}, {...state, nextId: state.nextId + 1});
    case 'ADD_EXPENSE':
      return Object.assign({}, {...state, list: [...state.list, action.data]});
    case 'DELETE_EXPENSE':
      return Object.assign({}, {...state, list: [...state.list].filter(item => item.id !== action.data)});
    default:
      return state;
  }
};

const AlertReducer = (state = alertState, action) => {
  switch (action.type) {
    case 'SET_ALERT':
      return Object.assign({}, state, {...state.alert, ...action.data});
    default:
      return state;
  }
};

const shouldDevTools = process.env.NODE_ENV === 'production' ?
                        compose :
                        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhancers = shouldDevTools;
const reducers = combineReducers({
  expenses: ExpensesReducer,
  alert: AlertReducer
});

const enhancers = composeEnhancers(applyMiddleware());

// Bind store to reducer
export default createStore(reducers, enhancers);
