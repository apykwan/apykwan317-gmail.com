import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpensestotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

const ExpensesSummary = ({expensesTotal, expenseCount}) => {
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    const plural = expenseCount > 1 ? 's': '';
    return (
        <div className="page-header">
            <div className="content-container">
                <h3 className="page-header__title">
                    Viewing <span>{expenseCount}</span> expense{plural} totalling <span>{formattedExpensesTotal}</span>
                </h3>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
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