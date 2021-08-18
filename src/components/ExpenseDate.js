import './ExpenseDate.css';

const ExpenseDate = props => {
    // Js

    const month = props.date.toLocaleDateString('it-IT', { month: 'long' });
    const day = props.date.toLocaleDateString('it-IT', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__month">{month.toUpperCase()}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
};

export default ExpenseDate;
