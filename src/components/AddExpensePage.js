import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

const AddExpensePage = ({ startAddExpense, history }) => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Add Expense</h1>
      </div>
    </div>
    <div className="content-container">
      <ExpenseForm
        className="form"
        onSubmit={expense => {
          startAddExpense(expense);
          history.push('/');
        }}
      />
    </div>
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
