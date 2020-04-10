// import uuid from 'uuid/v4';
import database from '../firebase/firebase';

/*WITHOUT Firebase */
// component calls action generator
// action generator returns object
// component dispatches object
// redux stores changes

/* WITH Firebase */
// component calls action generator
// action generator returns function
// component dispatches function(?)
// function runs (has the ability to dispatch other actions and do whatever it wants)

// ADD_EXPENSE
// const addExpense = (
//     {
//         description = '',
//         note = '',
//         amount = 0,
//         createdAt = 0
//     } = {}
// ) => ({
//     type: 'ADD_EXPENSE',
//     expense: {
//         id: uuid(),
//         description,
//         note,
//         amount,
//         createdAt
//     }
// });

const addExpense = expense => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };

        database.ref('expenses')
            .push(expense)
            .then(ref => {
                dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }));
            });
    };
};

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export { addExpense, removeExpense, editExpense }