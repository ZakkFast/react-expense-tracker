import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSE_DATA = [
  {
    id: '1',
    title: 'Toilet Paper',
    amount: 8.59,
    date: new Date(2022, 4, 11),
  },
  {
    id: '2',
    title: 'Monitor',
    amount: 899.99,
    date: new Date(2021, 10, 8),
  },
  {
    id: '3',
    title: 'Medical Bills (Saline IV)',
    amount: 2944.67,
    date: new Date(2022, 7, 22),
  },
  {
    id: '4',
    title: 'Keyboard',
    amount: 49.99,
    date: new Date(2021, 4, 12),
  },
  {
    id: '5',
    title: 'Book (Atomic Habits)',
    amount: 34.89,
    date: new Date(2021, 4, 12),
  },
  {
    id: '6',
    title: 'Concert Tickets',
    amount: 109.89,
    date: new Date(2021, 4, 17),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE_DATA);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <h1 className='head'>Expense Tracker</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
