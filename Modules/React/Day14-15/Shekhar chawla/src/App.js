import { Container } from '@chakra-ui/react'

import './App.css';
import Expense from './components/practice/Expense'

function App() {
  return (
    <Container maxW="container.xl" centerContent>
        <Expense />
    </Container>
  );
}

export default App;
