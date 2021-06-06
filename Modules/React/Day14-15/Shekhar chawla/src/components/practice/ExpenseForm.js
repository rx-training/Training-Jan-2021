import React from 'react'
import { HStack, Input, InputGroup, InputLeftElement, IconButton } from '@chakra-ui/react'
import { BiMessageSquareDetail, BiDollar } from "react-icons/bi"
import { IoAdd } from "react-icons/io5";

export default function ExpenseForm({ charge, amount, handleCharge, handleAmount, handleSubmit }) {

  return (
    <form>
      <HStack spacing={3} my={5}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<BiMessageSquareDetail color="gray" fontSize={20} />}
          />
          <Input placeholder="Enter Charge" size="lg" value={charge} onChange={handleCharge} />
        </InputGroup>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<BiDollar fontSize={20} color="gray" />}
          />
          <Input type="number" placeholder="Enter Amount" size="lg"  value={amount} onChange={handleAmount} />
        </InputGroup>
        
        <IconButton type="submit" size="lg" icon={ <IoAdd /> } onClick={handleSubmit}></IconButton>
      </HStack>
    </form>
  )
}
