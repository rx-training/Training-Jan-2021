import React from 'react'
import { ExpanceItem } from './ExpanceItem'
import {MdDelete} from 'react-icons/md'

export const ExpanseList = ({expanses,clearItems,handleEdit,handleDelete}) => {
   return (
      <>
         <ul className="list">
            {expanses.map((expanse) => {
               return (<ExpanceItem 
                     key={expanse.id} 
                     expanse={expanse}  
                     handleEdit={handleEdit}
                     handleDelete={handleDelete}/>)
            })}
         </ul>
         {expanses.length > 0 && <button className="btn" onClick={clearItems}>  
            clear expanses <MdDelete className="btn-icon" />
         </button> }
      </>
   )
}
