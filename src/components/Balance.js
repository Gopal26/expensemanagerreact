import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { expenses } = useContext(GlobalContext);

  const amounts = expenses.map(expense => expense.expense);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
    <h1>Rs. {total}</h1>
    </>
  )
}
