import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = props => {
    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());

    const getValue = value => {
        console.log(value);
        setFilteredYear(value);
        console.log('filterd ', filteredYear);
    };
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onDropDown={getValue} />
                {props.items.map(e => (
                    <ExpenseItem
                        title={e.title}
                        amount={e.amount}
                        date={e.date}
                    />
                ))}
            </Card>
        </div>
    );
};

export default Expenses;
