import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { expenses } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {expenses.map(expense => (<Transaction key={expense.id} expense={expense} />))}
      </ul>
    </>
  )
}
