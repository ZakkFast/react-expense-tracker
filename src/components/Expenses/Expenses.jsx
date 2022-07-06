import { useState } from 'react';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import Card from '../Layout/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';

const ExpenseItems = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('all');

  const fitlerChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    if (filteredYear === 'all') {
      return expense;
    } else return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <>
      <Card className='expenses'>
        <ExpenseFilter
          onChangeFilter={fitlerChangeHandler}
          selected={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList expenses={filteredExpenses}/>
      </Card>
    </>
  );
};

export default ExpenseItems;
