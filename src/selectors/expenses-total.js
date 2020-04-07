export default expenses => {
    if (expenses.length > 0) {
        return expenses
            .map(expense => expense.amount)
            .reduce((sum, expense) => sum + expense, 0)
    } else {
        return 0;
    }
}
