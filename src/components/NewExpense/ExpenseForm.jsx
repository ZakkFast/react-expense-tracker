import React, { useState } from 'react';

import './ExpenseForm.css';
import Button from '../Layout/Button';

const ExpenseForm = ({ onSaveExpenseData, btnStateToggle }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // Need to come back and fix this to avoid DRY. Issue when combined is date is returning invalid for use with methods.
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!enteredTitle || !enteredAmount || !enteredDate) {
      window.alert('Please enter a valid value');
    } else {
      const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate),
      };

      onSaveExpenseData(expenseData);
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
      btnStateToggle();
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2021-01-01'
            max='2024-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <Button btnText='Cancel' onClickHandle={btnStateToggle}/>
        <Button type='submit' btnText='Add Expense' />
      </div>
    </form>
  );
};

export default ExpenseForm;
