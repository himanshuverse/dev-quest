import { useState} from 'react'
import './App.css'


type User={
  name:string,
  email:string,
  password:string
}

type FormError={
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

const [error,setError]=useState<FormError>({
  name:"",
  email:"",
  password:""

})

function validateFields(){

  const newError: FormError = { name: "", email: "", password: "", };
  // name validation
  if(user.name.trim()===""){
    newError.name="name is required"
  }
 //email validation
 if (user.email.trim() === "") {
  newError.email = "email is required";
} else if (!user.email.includes("@")) {
  newError.email = "provide a valid email";
}

 //password validation
 if(user.password.trim()===''){
  newError.password='please enter a password'
 } else if(user.password.length <6){
  newError.password = "Password must be at least 6 characters";
 }

setError(newError)
console.log(newError)

return !newError.name && !newError.email && !newError.password

}


function submit(e:any){
  e.preventDefault()
 const isValid = validateFields()

 if (!isValid)  return 

console.log(user)
setUser({  name:"",
  email:"",
  password:""})
}

  return (
  <div>
<form  onSubmit={submit}>
 <div style={{display:'grid', gap:'10px' , minHeight:'10px', padding:'10px 20px'}}>
   <input type="text " placeholder='name'value={user.name} onChange={(e)=>{
    setUser({...user,name:e.target.value})
   }} />
   {error.name && <p>{error.name}</p>}

    <input type="text " placeholder='email' value={user.email} onChange={(e)=>{
      setUser({...user,email:e.target.value})
    }}/>
       {error.email && <p>{error.email}</p>}

      <input type="text " placeholder='password' value={user.password} onChange={(e)=>{
        setUser({...user,password:e.target.value})
      }} />
         {error.password && <p>{error.password}</p>}

<button type='submit'>Submit</button>
 </div>

</form>
  </div>
  )
}

export default App
