import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [amount, setAmount] = useState(1)
  const [lastAction, setLastAction] = useState('')
  const [clicks, setClicks] = useState(0)

  function add() {
    setCount(Number(count) + Number(amount))
    setLastAction(`Added ${amount}`)
    setClicks(clicks => clicks + 1)
  }
  function sub() {
    if (count - amount < 0) return
    setCount(Number(count) - Number(amount))
    setLastAction(`Sub ${amount}`)
    setClicks(clicks => clicks + 1)

  }

  function reset() {
    setCount(0)
    setLastAction('Reset')
    setClicks(clicks => clicks + 1)

  }
  return (
    <>
      <div>
        <div>
          {count}
          <p>
            Last Action : {lastAction}
          </p>
          <p>
            Total Clicks :{clicks}
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <input type="number"
            onChange={(e) => setAmount(Number(e.target.value))}
            onKeyDown={(e) => {
              if (e.shiftKey && e.key=='Enter') {
                sub()
              }
               else if (e.key == 'Enter') {
                add()
              }  
              else if (e.key == 'r') {
                reset()
              }
            }}
          />
          <button onClick={add}>
            add
          </button>
          <button onClick={sub}>
            sub
          </button>
          <button onClick={reset}>
            reset
          </button>
        </div>
      </div>
    </>
  )
}

export default App
