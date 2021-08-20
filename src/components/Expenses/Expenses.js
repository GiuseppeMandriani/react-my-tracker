import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = props => {
    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());

    const expensesFiltered = props.items.filter(
        element =>
            parseInt(element.date.getFullYear()) === parseInt(filteredYear)
    );

    const getValue = value => {
        console.log(value);
        setFilteredYear(value);
        console.log('filterd ', filteredYear);
    };

    // Metodo 1

    let expensesContent = <p className="not-element">No Element Found</p>;

    if (expensesFiltered.length > 0) {
        expensesContent = expensesFiltered.map(expenses => (
            <ExpenseItem
                key={expenses.id}
                title={expenses.title}
                amount={expenses.amount}
                date={expenses.date}
            />
        ));
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onDropDown={getValue} />

                {/* Metodo Pulito 1 */}
                {expensesContent}

                {/* Metodo 2 */}

                {/* {expensesFiltered.length === 0 ? (
                    <p className="not-element">No Element Found</p>
                ) : (
                    expensesFiltered.map(expenses => (
                        <ExpenseItem
                            key={expenses.id}
                            title={expenses.title}
                            amount={expenses.amount}
                            date={expenses.date}
                        />
                    ))
                )} */}
            </Card>
        </div>
    );
};

export default Expenses;
