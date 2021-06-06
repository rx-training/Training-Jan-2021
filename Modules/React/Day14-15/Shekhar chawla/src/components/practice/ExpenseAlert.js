import React from 'react'
import { Box, Text } from '@chakra-ui/react'

export default function Alert({ type, text }) {
  return (
    <Box bg={ type === 'success' ? 'blue' : 'tomato'} w="100%" h="32px">
      <Text fontSize={20} textAlign={[ 'left', 'center']} color="white">{text}</Text>
    </Box>
  )
}
