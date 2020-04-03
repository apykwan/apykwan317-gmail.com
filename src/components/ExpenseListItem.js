import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <h3>{description}</h3>
        <p>Amount: ${amount}, Created: {createdAt}</p>
        <Link to={`/edit/${id}`}><h4>Edit</h4></Link>
    </div>
)

export default ExpenseListItem;

// export default connect()(ExpenseListItem);

// <button
//     onClick={() => {
//         dispatch(removeExpense({ id }));
//     }}
// >
//     remove
//         </button>