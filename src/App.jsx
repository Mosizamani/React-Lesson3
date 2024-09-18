import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'
import Modal from './Modal'
import { useEffect } from 'react'
import Heading from './Heading'

function App() {
  const [count, setCount] = useState(0)

  let counter = 0

  setTimeout(() => {
    counter++
    console.log(counter.toString())
  }, 1000)

  return (
    <>
      <Heading text={counter}></ Heading>
    </>
  )
}
export default App
