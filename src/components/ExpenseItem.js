import './ExpenseItem.css';

const ExpenseItem = props => {
    // Js

    const month = props.date.toLocaleDateString('it-IT', { month: 'long' });
    const day = props.date.toLocaleDateString('it-IT', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div className="expense-item">
            <div>
                <div>{day}</div>
                <div>{month.toUpperCase()}</div>
                <div>{year}</div>
            </div>

            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">€ {props.amount}</div>
            </div>
        </div>
    );
};

export default ExpenseItem;
