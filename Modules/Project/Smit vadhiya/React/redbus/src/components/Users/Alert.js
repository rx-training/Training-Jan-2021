import React, { useContext } from 'react'
import styled from 'styled-components'
import {RedbusContext} from '../../context/context'

export const Alert = (props) => {

   const values = useContext(RedbusContext)
   console.log(values);

   return (
      <AlertStyled display={values.alert}>
         <div className="bg-danger text-white h3  border">
            wrong password
            <button className="btn text-white p-1" onClick={values.closeAlert} ><i className="fa fa-times" ></i></button>
         </div>
      </AlertStyled>
   )
}
/* 
   9998311632
   8128110786 
*/

const AlertStyled = styled.div`
   position: fixed;
   top: 70px;
   width: 100%;
   display: ${(props) => props.display ? "flex" : 'none'};
   justify-content: center;
   z-index: 9999;
   div{
      box-shadow: 1px 0px 10px 2px rgba(0,0,0,0.6);
      border-radius: 10px;
      padding: 10px 40px;
      position: relative;
   }
   .btn{
      position: absolute;
      top: 0;
      right: 2px;
   }
`