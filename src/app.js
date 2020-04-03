import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
//     console.log(visibleExpenses);
// });

// store.dispatch(addExpense({ description: 'Water bill', amount: 100}));
// store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'rent', amount: 109500}));
// // store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('rent'));
// }, 3000)

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));