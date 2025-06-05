// import { useState } from 'react'
import Chai from "./Chai"

function App() {
const username = 'nitin'
//variable username inside curly braces is evaluated expression, we cant write if-else, or other js expressions
  return (
    <>
    <Chai/>
    <h1>chai aur react {username}</h1>              
    </>
  )
}

export default App