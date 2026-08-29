import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increment(){
    setCount(count+1);
  }

  function decrement(){
    if(count===0) return 
    setCount(count-1)
  }

  return (
    
     <>
     <div className='display'>
      <h1>
        {count}
      </h1>
     </div>
     <div className='button-div'>
      <button className='button' onClick={increment}>
       INCREMENT
      </button>
      <button className='button' onClick={decrement}>
       DECREMENT
      </button>
     </div>
     </>
     
    )}

export default App
