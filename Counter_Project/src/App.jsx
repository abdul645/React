import { useState } from 'react' // hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // const [variable, function]=  useState(x);
  // function is responsibel to update the variable
  let [counter, setCounter]=  useState(15)


//  let counter = 15;

 const addValue = () =>{
  // console.log("value added", Math.random());
  // console.log("clicked  "+ counter);
  // counter = counter + 1;
  // if(counter <= 24){
  //   setCounter(counter);
  // }

  // prevCounter -> last updates state (counterf)
  setCounter(prevCounter => prevCounter +1)
  setCounter(prevCounter => prevCounter +1)
  setCounter(prevCounter => prevCounter +1)
  setCounter(prevCounter => prevCounter +1)

  // setCounter((prevCounter) => {
  //   prevCounter +1;
  //   return prevCounter
  // })



  console.log("Adding value  "+ counter);
 }

 const removeValue = () =>{
  counter = counter -1;
  if(counter >= 0) setCounter(counter); // it will only when counter value is greater tha 0
  console.log("substracting value  "+ counter); // it doesnot depend on counter value 
 }

  return (
    <>
      <h1>Abdul Azeem</h1>
      <h2>Counter value : {counter} </h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer {counter}</p>
    </>
  )
}

export default App
