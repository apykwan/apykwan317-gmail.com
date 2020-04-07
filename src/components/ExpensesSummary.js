import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpensestotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

const ExpensesSummary = ({expensesTotal, expenseCount}) => {
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    const plural = expenseCount > 1 ? 's': '';
    return (
        <div>
            <h3>
                {expenseCount > 0 && `Viewing ${expenseCount} expense${plural} totalling ${formattedExpensesTotal}`}
            </h3>
        </div>
    )
}
const mapStateToProps = state => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensestotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary);