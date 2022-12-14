import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';
import {v4 as uuidv4} from 'uuid';

const AddExpenseForm = () => {
    const {dispatch} = useContext(AppContext)
   const [name, setName] = useState('');
   const [cost, setCost] = useState('');

   const onSubmit = (e) => {
    e.preventDefault();
    
    const expense = {
        id: uuidv4(),
       name, 
       cost: parseInt(cost), 
    };
    
    dispatch({
        type: 'ADD_EXPENSE',
        payload: expense,
    });
    
    setName('');
	setCost('');
   };

   return(
    <form onSubmit={onSubmit}>
        <div className='row'>
        <div className='col-sm col-lg-4'>
         <label htmlFor='name'>
          Name
         </label>
         <input 
         id='name'
         required='required'
         type='text'
         className='form-control'
         value={name}
         onChange={(e)=>setName(e.target.value)}
         />
       
        
        </div>

        <div className='col-sm'>
         <label htmlFor='name'>
          Cost
         </label>
         <input 
         id='cost'
         required='required'
         type='text'
         className='form-control'
         value={cost}
         onChange={(e)=> setCost(e.target.value)}
         />
       
        
        </div>
        </div>
        <div className='col-sm'>
        <button type='submit' className='btn btn-primary'>
        Save
        </button>
        </div>

     
    </form>
   ) 
}

export default AddExpenseForm;