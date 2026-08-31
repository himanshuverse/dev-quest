import { useState } from 'react'
import './App.css'

function App() {
const [todos,setTodos]= useState<string[]>([])
const [task,setTask]=useState("")

function addTask(){
  setTodos([...todos,task])
  setTask("")
}

function deleteTodo(toDeleteIndex:number){
  setTodos(todos.filter((todo, index)=>index!==toDeleteIndex))
}

  return (
    <div>
      <div style={{display:'flex',gap:'10px'}}>
        <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} placeholder='enter task' />
        <button onClick={addTask}>submit</button>
      </div>
      <div>
         {todos.map((todo, index) => {
  return (
    <div key={index}>
      <p>{todo}</p>
      <button onClick={() => deleteTodo(index)}>
        Delete
      </button>
    </div>
  )
})}
      </div>
    </div>
  )
}

export default App
