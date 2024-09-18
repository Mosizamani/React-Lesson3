import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'
import Modal from './Modal'
import { useEffect } from 'react'

function App() {

  const [dynamicValue, setDynamicValue] = useState(0); // State for dynamic prop value
  const [clickedValue, setClickedValue] = useState(''); // State to store the value from the button when clicked
  const [incrementAmount, setIncrementAmount] = useState(1); // State for the increment amount

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the dynamic value by the current incrementAmount on each tick
      setDynamicValue((prevValue) => prevValue + incrementAmount);
    }, 1000); // Update every 1 second

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [incrementAmount]); // Re-run the effect if incrementAmount changes

  const handleButtonClick = (value) => {
    // Save the text value passed from the Button component when it's clicked
    setClickedValue(value);
  }

  

  return (
    <>
      <div>
        <h1>Dynamic Value: {dynamicValue}</h1>
        <Button
          text={`Click me (Value: ${dynamicValue})`}
          callback={handleButtonClick}
          incrementAmount={incrementAmount} // Pass the increment amount to Button
        />
        {clickedValue && <h2>Last Clicked Value: {clickedValue}</h2>}
        
        {/* Input to change the increment amount */}
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          placeholder="Set increment amount"
          style={{ marginTop: '20px' }}
        />
      </div>
    </>
  )
}
export default App
