import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = props => {
    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());

    const expensesFiltered = props.items.filter(
        element => element.date.getFullYear() == filteredYear
    );

    const getValue = value => {
        console.log(value);
        setFilteredYear(value);
        console.log('filterd ', filteredYear);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onDropDown={getValue} />

                {expensesFiltered.map(expenses => (
                    <ExpenseItem
                        key={expenses.id}
                        title={expenses.title}
                        amount={expenses.amount}
                        date={expenses.date}
                    />
                ))}
            </Card>
        </div>
    );
};

export default Expenses;
