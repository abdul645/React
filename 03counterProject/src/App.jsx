import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //here counter is variable name and 
  let [counter, setCounter] = useState(15);
  // let counter = 5;

  const addvalue = () =>{
    // console.log("value added", Math.random());
    // console.log("value added", counter);
    counter = counter + 1;
    setCounter(counter);
  }


  const removeValue =() =>{
    setCounter(counter - 1);
  }


  return (
    <>
     <h1>chai aur react {counter}</h1>
     <h2>counter value :{counter} </h2>

     <button
     onClick={addvalue}
     >add value {counter}</button>
     <br />
     <button
     onClick={removeValue}
     >remove value {counter}</button>
    </>
  )
}

export default App
