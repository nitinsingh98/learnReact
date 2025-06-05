import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components.js/card'
import Counter from './components.js/counter'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name = 'nitin'
  const object = {
    name: 'chai',
    age:27
  }
  const array = [1,2,3]

  return (
    // those empty <> html tags, we call them fragment btw
    <> 
    <Card name = {name} obj = {object} newArray = {array}></Card>
    <Counter></Counter>
    </>
  )
}

export default App
