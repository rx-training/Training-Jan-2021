import React , { useState , useEffect} from 'react'
import './App.css';
import {v4 as uuid} from 'uuid'
import Alert from './components/Alert'
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';


const initialExpenses = [
  {id:uuid() , charge:"car rante" , amount:150},
  {id:uuid() , charge:"room rante" , amount:250},
  {id:uuid() , charge:"mobile racharge" , amount:50}
] 

const donItem = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : []
console.log(donItem);
// const initialExpenses = localStorage.getItem('expenses') ? localStorage.getItem('expenses') : []

function App() {

  const [expenses , setExpense] = useState(donItem)
  console.log(expenses);

  const [charge , setCharge] = useState('')

  const [amount , setAmount] = useState('')

  const [alert , setAlert] = useState({show:false})

  const [edit , setEdit] = useState(false)

  const [id , setId] = useState(0)

  // use effect
  useEffect(()=>{
    console.log('use effect');
    localStorage.setItem("expenses" , JSON.stringify(expenses))
  },[expenses])

 const handleCharge = (e) =>{
    console.log(e.target.value);
    setCharge(e.target.value)
  }

 const handleAmount = (e) =>{
    console.log(e.target.value);
    setAmount(e.target.value)
  }

 const handleAlert = ({type , text}) =>{
    setAlert({show:true , type , text})
    setTimeout(()=>{
      setAlert({show:false})
    } , 3000)
 } 

 const handleSubmit = (e) =>{
    e.preventDefault();
    if(charge !== '' && amount > 0){

      if(edit){
        let tempExpenses = expenses.map(item => {
          return item.id === id ? {...item , charge , amount} : item  
        });
        setExpense(tempExpenses);
        setEdit(false)
        handleAlert({type:"success" , text:"item edited"})

      }
      else{
        const singleExpense = {id:uuid() , charge , amount}
        setExpense([...expenses, singleExpense]);
        handleAlert({type:"success" , text:"item added"});
      }
        
        setCharge("");
        setAmount("");
    }
    else{
      handleAlert({type:"danger" , text:`charge can't be empty and amount has to be bigger than zero`})
    }
  };

  // clear all items

  const clearItems = () =>{
    setExpense([]);
    handleAlert({type:"danger" , text:"all item deleted"})
  }
  // delete single item
  const handleDelete = (id) =>{
    let tempExpenses = expenses.filter(item => item.id !== id)
    setExpense(tempExpenses)
    handleAlert({type:"danger" , text:"item deleted"})
  }
  // handle edit
  const handleEdit = (id) =>{
   
    let expense = expenses.find(item => item.id === id)
    let {charge , amount} = expense
    setCharge(charge)
    setAmount(amount)
    setEdit(true)
    setId(id)
    
  }

  return (
    <div>
      {alert.show && <Alert type={alert.type} text={alert.text}></Alert>}
      {/* <Alert></Alert> */}
      <h1>Budget Calculator</h1>

      <main className="App">
      <ExpenseForm charge={charge} amount={amount} handleAmount={handleAmount} handleCharge={handleCharge} handleSubmit={handleSubmit} edit={edit}></ExpenseForm>
      
      <ExpenseList expenses={expenses} handleDelete={handleDelete} handleEdit={handleEdit} clearItems={clearItems}></ExpenseList>
      </main>
      
      <h1>total spending : {" "}
      <span className="total">
        ${expenses.reduce((acc , curr)=>{
          return (acc += parseInt(curr.amount))
        } , 0)}
      </span>
      </h1>
    </div>
  );
}

export default App;
