import React from 'react'
import {MdEdit, MdDelete} from 'react-icons/md'
export const ExpanceItem = ({expanse,handleEdit,handleDelete}) => {
   const {id,charge,amount} = expanse
   return (
      <li className="item">
         <div className="info">
            <span className="expanse">{charge}</span>
            <span className="amount">${amount}</span>
         </div>
         <div>
            <button className="edit-btn" aria-label="edit-button" onClick={() => handleEdit(id)} >
               <MdEdit />
            </button>
            <button className="clear-btn" aria-label="delete-button" onClick={() => handleDelete(id)}>
               <MdDelete />
            </button>
         </div>
      </li>
   )
}
