
import store from './';

export default {
  setExpenses: list => store.dispatch({type: 'SET_EXPENSES', data: list}),
  setExpensesAPI: list => store.dispatch({type: 'SET_EXPENSES_API', data: list}),
  addExpense: expense => store.dispatch({type: 'ADD_EXPENSE', data: expense}),
  deleteExpense: expenseId => store.dispatch({type: 'DELETE_EXPENSE', data: expenseId}),
  incrementNextId: () => store.dispatch({type: 'INCREMENT_NEXT_ID'}),
  setTotal: newTotal => store.dispatch({type: 'SET_TOTAL', data: newTotal}),
  setUser: user => store.dispatch({type: 'SET_USER', data: user}),
  setAlert: (msg, type) => store.dispatch({type: 'SET_ALERT', data: {message: msg, type, show: msg !== ''}})
};
