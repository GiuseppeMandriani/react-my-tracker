import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const getItem = (item) => {
        // console.log('NewExpense')
        // console.log(item)

        const items = {
            ...item,
            id: Math.random()
        }

        props.getData(items)

        
    }


    return (
        <div className="new-expense">
            <ExpenseForm onSaveitem={getItem} />
        </div>
    );
};

export default NewExpense;
