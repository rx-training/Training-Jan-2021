import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Container, Text } from '@chakra-ui/react'

import Alert from './ExpenseAlert'
import List from './ExpenseList'
import Form from './ExpenseForm'


const initialExpenses = [
  { id: uuid(), charge: 'rent', amount: 10 },
  { id: uuid(), charge: 'car payment', amount: 200 },
  { id: uuid(), charge: 'hello ', amount: 300 },
]


export default function Expense() {
  const [expenses, setExpenses] = useState(initialExpenses)
  const [charge, setCharge] = useState('')
  const [amount, setAmount] = useState('')
  const [alert, setAlert] = useState({ show: false })
  const [edit, setEdit] = useState(false)
  const [id, setId] = useState(0)

  const handleCharge = (event) => {
    setCharge(event.target.value)
  }
  const handleAmount = (event) => {
    setAmount(event.target.value)
  }
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text })
    setTimeout(() => {
      setAlert({ show: false })
    }, 3000)
  }

  const clearItems = () => {
    setExpenses([])
    handleAlert({ type: 'danger', text: 'All items deleted' })
  }
  const handleDelete = (id) => {
    const tempExpenses = expenses.filter(item => item.id !== id)
    setExpenses(tempExpenses)
    handleAlert({ type: 'danger', text: 'Item deleted' })
  }
  const handleEdit = (id) => {
    const item = expenses.find(item => item.id === id)
    setAmount(item.amount)
    setCharge(item.charge)
    setEdit(true)
    setId(id)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (charge !== '' && amount > 0) {
      if (edit) {
        const tempExpenses = expenses.map( item =>{
          return item.id === id ? {...item, charge, amount} : item
        })
        setExpenses(tempExpenses)
        setEdit(false)
        handleAlert({ type: 'success', text: 'Item edited' })
      } else {
        const newExpense = { id: uuid(), charge, amount }
        setExpenses([...expenses, newExpense])
        handleAlert({ type: 'success', text: 'Item added' })
      }

      setCharge('')
      setAmount('')
    } else {
      handleAlert({ type: 'danger', text: `Charge can't be empty value` })
    }
  }

  return (
    <Container maxW="3xl" centerContent>
      { alert.show && <Alert type={alert.type} text={alert.text} />}

      <Text bgGradient="linear(to-l, #7928CA,#FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold">Budget Calculator
      </Text>


      <Container maxW="4xl" centerContent>
        <Form charge={charge} amount={amount} handleAmount={handleAmount} handleCharge={handleCharge} handleSubmit={handleSubmit} />
        <List expenses={expenses} handleEdit={handleEdit} handleDelete={handleDelete} clearItems={clearItems} />
      </Container>


      <h1> Total spending: <span>$ {expenses.reduce((mySum, item) => {
        return (mySum += parseInt(item.amount) )
      }, 0)}</span></h1>
    </Container>
  )
}
