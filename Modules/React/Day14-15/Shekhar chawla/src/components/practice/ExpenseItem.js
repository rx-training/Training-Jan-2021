import React from 'react'

import { IconButton, Stack, GridItem, Text } from '@chakra-ui/react'
import { MdEdit, MdDelete } from 'react-icons/md'


export default function ExpenseItem({ expense: { id, charge, amount }, handleEdit, handleDelete }) {

  return (
    <>
    
      <GridItem colStart={1} colEnd={4}>
        <Text fontSize={25}> {charge} </Text>
      </GridItem>
      <GridItem colStart={4} colEnd={5} h="10">
        <Text fontSize={20} textAlign={['left', 'center']}>$ {' ' + amount} </Text>
      </GridItem>
      <GridItem colStart={5} colEnd={6} h="10">
        <Stack direction="row" spacing={4}>
          <IconButton icon={<MdEdit />} colorScheme="blue" onClick={() => handleEdit(id)}> </IconButton>
          <IconButton icon={<MdDelete />} colorScheme="red" onClick={() => handleDelete(id)}> </IconButton>
        </Stack>
      </GridItem>
      
    </>
  )
}
