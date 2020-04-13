import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

const AddExpensePage = ({ startAddExpense, history }) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={expense => {
        startAddExpense(expense);
        history.push('/');
      }}
    />
  </div>
);

const mapDispatchToProps = dispatch => ({
  startAddExpense: expense => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);

// const AddExpensePage = (props) => (
//   <div>
//     <h1>Add Expense</h1>
//     <ExpenseForm 
//       onSubmit={expense => {
//         props.dispatch(startAddExpense( {...expense} ));
//         props.history.push('/');
//       }}
//     />
//   </div>
// );

// const mapDispatchToProps = dispatch => ({
//   startAddExpense: expense => dispatch(startAddExpense(expense))
// });

// export default connect(mapDispatchToProps)(AddExpensePage);
