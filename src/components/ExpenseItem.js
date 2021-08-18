import './ExpenseItem.css';

const ExpenseItem = () => {
    // Js

    const expenseDate = new Date(2021,7,18);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 250.9;

    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">€ {expenseAmount}</div>
            </div>
        </div>
    );
};

export default ExpenseItem;
