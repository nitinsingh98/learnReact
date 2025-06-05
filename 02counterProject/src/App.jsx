import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)

  function add(){
    if (counter < 20){setCounter(prev => prev + 1)
        setCounter(prev => prev + 1)
    setCounter(prev => prev + 1)
    setCounter(prev => prev + 1)
    setCounter(prev => prev + 1)
    }
  }
  function remove(){
    if (counter > 0)setCounter(counter - 1)
  }

// let counter = 5
  return (
    <>
     <h1>Chai aur react </h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={add}>Add value {counter}</button> <br />
     <button onClick={remove}> Remove value {counter}</button>
    </>
  )
}

export default App
