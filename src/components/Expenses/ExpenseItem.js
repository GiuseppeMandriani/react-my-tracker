import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import {useState} from 'react';

const ExpenseItem = props => {
    //clickHandler

    const [title, setTitle] = useState(props.title)

    

    const clickHandler = () => {
        setTitle('Update');
        console.log(title)
    };
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">€ {props.amount}</div>
            </div>
            <button onClick={clickHandler} className="">
                Change Title
            </button>
        </Card>
    );
};

export default ExpenseItem;
