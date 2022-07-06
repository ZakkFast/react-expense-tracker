// import { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../Layout/Card';

const ExpenseItem = ({ id, title, amount, date }) => {
  // const [expenseTitle, setExpenseTitle] = useState(title);

  // const clickHandler = () => {
  //   setExpenseTitle('chaged');
  // };

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>${amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
