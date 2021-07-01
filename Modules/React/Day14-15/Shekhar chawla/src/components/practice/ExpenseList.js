import React from 'react'
import Item from './ExpenseItem'

import { Button, Grid } from '@chakra-ui/react'
import { AiOutlineClear } from "react-icons/ai";


export default function ExpenseList({ expenses, handleEdit, handleDelete, clearItems }) {
  return (
    <>
      <Grid templateColumns="repeat(5,1fr)" gap={4} rowGap={7} my={5}>
        { expenses.map( item => {
          return <Item key={item.id} expense={item} handleEdit={handleEdit} handleDelete={handleDelete} />
        })}
      </Grid>

      { expenses.length !==0 && (
        <Button colorScheme="teal" rightIcon={ <AiOutlineClear />} onClick={clearItems}>
          Clear list 
        </Button>
      )}
    </>
  )
}
