import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const ExpenseTotal = ()=>{
  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item)=>{
    return (total += item.cost);
  },0);

  return (
    <div className='display alert alert-primary d-flex justify-content-between align-items-center'>
        <span>Spent so far: ${totalExpenses}</span>
    </div>
  )
}

export default ExpenseTotal;