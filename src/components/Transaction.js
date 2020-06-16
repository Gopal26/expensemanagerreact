import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ expense }) => {
  const { deleteExpense } = useContext(GlobalContext);

  const sign = expense.expense < 0 ? '-' : '+';

  return (
    <li className={expense.expense < 0 ? 'minus' : 'plus'}>
      {expense.text} <span>{sign}RS. {Math.abs(expense.expense)}</span><button onClick={() => deleteExpense(expense.id)} className="delete-btn">X</button>
    </li>
  )
}
