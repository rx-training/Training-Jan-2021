import './App.css';
import { Alert } from './components/Alert';
import { ExpanseList } from './components/ExpanseList';
import { ExpenseForm } from './components/ExpenseForm';
import uuid from 'uuid'
import {useEffect, useState} from 'react'

const initialExpanses = localStorage.getItem('expanses')? JSON.parse(localStorage.getItem('expanses')) : []
/* 
const initialExpanses = [
  {id:uuid(), charge:"rent",amount:1600},
  {id:uuid(), charge:"car payment",amount:400},
  {id:uuid(), charge:"credit card bill",amount:1200}
]  */

function App() {
  //*************** state values *************************** */
  const [expaneses, setExpaneses] = useState(initialExpanses)
//single-charge
  const [charge, setCharge] = useState('')
  //single-amount
  const [amount, setAmount] = useState('')
  //alert
  const [alert ,setAlert] = useState({show:false})

  const [edit, setEdit] = useState(false)
  const [id, setId] = useState(0)


  useEffect(()=>{
      localStorage.setItem('expanses', JSON.stringify(expaneses))

  },[expaneses])
  
  //*************** use effect  *************************** */


    //*************** functionality  *************************** */

  const handleCharge =(e) =>{
    setCharge(e.target.value)
  }
  const handleAmount =(e) =>{
    setAmount(e.target.value)
  }


  const handleSubmit =(e) =>{  
    e.preventDefault()
    if(charge !== "" && amount > 0){
      if(edit){
        let tempExpanse =  expaneses.map(item => {
          return item.id ===id ?{...item,charge,amount} :item
        })
        setExpaneses(tempExpanse)
        setEdit(false)
        handelAlert({type : "success", text:"item edited"})
      } else {
        const singleExpanse = {id:uuid(),charge,amount}
        setExpaneses([...expaneses,singleExpanse])
        handelAlert({type : "success",text :"item added"})
      }
      setCharge('')
      setAmount('')
    } else {
      handelAlert({type : "danger" , text : `charge can not br empty and amoubt value has to be bigger than zero`})
    }
  }

  const handelAlert  =({type,text}) =>{
    setAlert({show :true, type,text})
    setTimeout(()=>{
      setAlert({show:false})
    },3000)
  }

  const clearItems=()=>{
    setExpaneses([])
    handelAlert({type : "danger", text:"all items deleted"})
  }

  const handleEdit=(id) => {
    const editExpanse = expaneses.find(item => item.id === id)
    setCharge(editExpanse.charge)
    setAmount(editExpanse.amount)
    setEdit(true)
    setId(id)
    
  }

  const handleDelete = (id) => {
    let tempExpanse =  expaneses.filter(item => item.id !== id)
    setExpaneses(tempExpanse)
    handelAlert({type : "danger", text:"item deleted"})
  }

  return (
    <>
      {alert.show ? <Alert type={alert.type} text={alert.text} /> : null}
      
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm 
          charge={charge} 
          amount ={amount}
          handleAmount={handleAmount} 
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <ExpanseList 
          expanses = {expaneses} 
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          clearItems ={clearItems} />
      </main>
      <h1> 
        total spending : <span className="total">
          ${ expaneses.reduce((acc,curr)=> {
            return (acc += parseInt(curr.amount))
          },0)}
        </span>
      </h1>
    </>
  );
}

export default App;
