import React, { useState } from 'react'

export default function Hooks() {
  const [count, setCount] = useState(0)
  const [fruits, setFruits] = useState({ banana: 4, apple: 5, orange: 2 })
  return (
    <div>
      <div>
        <p>Count {count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>

      <div>Banana {fruits.banana} Apple {fruits.apple} Orange {fruits.orange}</div>
      <button onClick={ () => setFruits(ps => ({...ps, banana:ps.banana+1})) }>b+</button>
      <button onClick={ () => setFruits(ps => ({...ps, apple:ps.apple+1})) }>a+</button>
      <button onClick={ () => setFruits(ps => ({...ps, orange:ps.orange+1})) }>o+</button>
    </div>
  )
}

