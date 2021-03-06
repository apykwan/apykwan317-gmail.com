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
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };

        database.ref(`users/${uid}/expenses`)
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
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({ id } = {} ) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`)
            .remove()
            .then(_ => {
                dispatch(removeExpense({id}))
            });
    };
};


// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch, getState)  => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates)
        .then(_ => {
            dispatch(editExpense(id, updates))
        });
    };
};

// SET_EXPENSES
export const setExpenses = expenses => ({
    type: 'SET_EXPENSES',
    expenses
})

export const startSetExpenses = _ => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`)
            .once('value')
            .then(snapshot => {
                const expenses = []
                snapshot.forEach(snapshotChild => {
                    expenses.push({
                        id: snapshotChild.key,
                        ...snapshotChild.val()
                    })
                })
                console.log(expenses);
                dispatch(setExpenses(expenses));
            })
    }
}
