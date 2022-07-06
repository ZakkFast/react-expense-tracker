import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import Button from '../Layout/Button';

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const btnStateToggle = () => {
    setIsEditing(!isEditing);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      {isEditing ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          btnStateToggle={btnStateToggle}
        />
      ) : (
        <Button btnText='Add New Expense' onClickHandle={btnStateToggle} />
      )}
    </div>
  );
};

export default NewExpense;
