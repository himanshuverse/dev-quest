import { useState} from 'react'
import './App.css'


type User={
  name:string,
  email:string,
  password:string
}

function App() {
const [user,setUser] =useState<User>({
  name:"",
  email:"",
  password:""
})

function submit(e:any){
  e.preventDefault()
console.log(user)
setUser({  name:"",
  email:"",
  password:""})
}

  return (
  <div>
<form  onSubmit={submit} onKeyDown={(e)=>{
  if(e.key=='Enter'){
    submit(e)
  }
}}>
 <div style={{display:'grid', gap:'10px' , minHeight:'10px', padding:'10px 20px'}}>
   <input type="text " placeholder='name'value={user.name} onChange={(e)=>{
    setUser({...user,name:e.target.value})
   }} />
    <input type="text " placeholder='email' value={user.email} onChange={(e)=>{
      setUser({...user,email:e.target.value})
    }}/>
      <input type="text " placeholder='password' value={user.password} onChange={(e)=>{
        setUser({...user,password:e.target.value})
      }} />
<button type='submit'>Submit</button>
 </div>

</form>
  </div>
  )
}

export default App
