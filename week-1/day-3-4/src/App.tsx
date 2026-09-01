import { useState } from 'react'
import './App.css'


type Todo={
  text:String,
  completed:boolean
}

function App() {
const [todos,setTodos]= useState<Todo[]>([])
const [task,setTask]=useState("")

function addTask(){
  setTodos([...todos,{text:task,completed:false}])
  setTask("")
}

function deleteTodo(toDeleteIndex:number){
  setTodos(todos.filter((todo, index)=>index!==toDeleteIndex))
}

function toggleTask(indexToToggle: number) {
  setTodos(
    todos.map((todo, index) => {
      if (index === indexToToggle) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }

      return todo
    })
  )
}

  return (
    <div>
      <div style={{display:'flex',gap:'10px'}}>
        <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} placeholder='enter task' onKeyDown={(e)=>{
          if(e.key=='Enter') return addTask()
        }} />
        <button onClick={addTask}>submit</button>
      </div>
      <div>
         {todos.map((todo, index) => {
  return (
    <div key={index}>
       <span
                style={{
                  textDecoration: todo.completed
                    ? 'line-through'
                    : 'none'
                }}
              >
                {todo.text}
              </span>
      <button onClick={() => deleteTodo(index)}>
        Delete
      </button>
      <button onClick={()=>toggleTask(index)}>  {todo.completed ? 'Undo' : 'Complete'}</button>
    </div>
  )
})}
      </div>
    </div>
  )
}

export default App
