import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddExpense = () => {
  const [text, setText] = useState('');
  const [expense, setExpense] = useState(0);

  const { addExpense } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newExpense = {
      id: Math.floor(Math.random() * 100000000),
      text,
      expense: +expense
    }

    addExpense(newExpense);
  }

  return (
    <>
      <h3>Add new Expense</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Expense <br />
            (negative - spending, positive - income)</label
          >
          <input type="number" value={expense} onChange={(e) => setExpense(e.target.value)} placeholder="Enter expense..." />
        </div>
        <button className="btn">Add Expense</button>
      </form>
    </>
  )
}
