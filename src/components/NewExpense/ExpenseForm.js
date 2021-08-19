import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
    // Primo Metodo più utilizzato

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // Secondo metodo
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const titleChangeHandler = event => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
        console.log(event.target.value);
    };
    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
        console.log(event.target.value);
    };
    const dateChangeHandler = event => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
        console.log(event.target.value);
    };

    return (
        <form action="">
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input onChange={titleChangeHandler} type="text" />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input
                        onChange={amountChangeHandler}
                        type="number"
                        min="0.01"
                        step="0.01"
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input
                        onChange={dateChangeHandler}
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                    />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
