import React from 'react'
import ExpenseItem from './ExpenseItem'
import {MdDelete} from 'react-icons/md'
function ExpenseList({expenses , handleEdit , handleDelete , clearItems}) {
   
    return (
        <div>
            <ul className="list">
                {expenses.map((expense)=>{
                  return  <ExpenseItem key={expense.id} expense={expense} handleDelete={handleDelete} handeEdit={handleEdit}></ExpenseItem>
                }) }
            </ul>
           
            {expenses.length >0 && <button className="btn" onClick={clearItems}>clear expenses<MdDelete className="btn-icon" ></MdDelete></button>}
        </div>
    )
}

export default ExpenseList
