import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext';

const Remaining = ()=>{
  const {expenses, budget} = useContext(AppContext);
    

  const totalExpenses = expenses.reduce((total, item)=>{
    return total = (total + item.cost);
  }, 0);

  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success'
  
  return (
    <div className={`alert ${alertType} display d-flex justify-content-between align-items-center`}>
        <span>Remaining: ${budget-totalExpenses}</span>
    </div>
  )
}

export default Remaining;