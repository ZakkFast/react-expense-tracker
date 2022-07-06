import './ExpensesList.css'
import ExpenseItem from './ExpenseItem';

const ExpensesList = ({expenses}) => {


  if (expenses.length === 0) {
    return (<h2 className='expenses-list__fallback'>No Expenses Found</h2>)
  }

  expenses.sort((a, b) => b.date - a.date);
  

  return (
    <ul className="expenses-list">
        {expenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
    </ul>
  )
}

export default ExpensesList