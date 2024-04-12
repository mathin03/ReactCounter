import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count,setCounter]=useState (5)

  // let count = 5;
  const AddValue=()=>{
    count=count+1
    if(count<=20){
    setCounter(count)
    }
  }
  const RemoveValue=()=>{
    count=count-1;
    if(count>=0){
    setCounter(count);
    }
  }

  return (
    <>
     <h1>hello</h1>
     <h2>Counter value : {count}</h2>
     <button
     onClick={AddValue}>Add value</button>

     <br />

     <button
     onClick={RemoveValue}>return value</button>
    </>
  )
}

export default App
