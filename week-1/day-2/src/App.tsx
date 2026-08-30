import { useState } from 'react'
import './App.css'

function App() {
  const [num, setNum] = useState<number>(1);
  const [count,setCount] =useState(0);

  function increment(){
    setCount(Number(count)+Number(num))
  }

  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      />

      <button onClick={increment}>
        Submit
      </button>
      <div>
        {count}
      </div>
    </div>
  );
}

export default App
