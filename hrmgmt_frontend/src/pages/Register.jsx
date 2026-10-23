import { useState } from 'react'

function Register() {
        let [name, setName] = useState("")
        let [emailid, setEmailid] = useState("")
        let [password, setPassword] = useState("") 
        let [age, setAge] = useState(17)
        let handleRegister = (e)=>{
            e.preventDefault()
            if (name == "admin" && emailid == "admin@gmail.com" && password == "admin" && age == 17) {
                console.log("Registration success")
            } else {
                console.log("Registration falied")
            }
        }
    return(
        <div>
            <form onSubmit = {handleRegister}> 
                <input type = "text" value = {name} onChange = {(event)=>setName(event.target.value)} placeholder = "Enter name"></input> <br />
                <input type="text" value = {emailid} onChange = {(event)=>setEmailid(event.target.value)} placeholder = "Enter emailId"></input> <br/>
                <input type="password" value = {password} onChange = {(event)=>setPassword(event.target.value)} placeholder = "Enter your password"></input> <br />
                <input type = "number" value = {age} onChange = {(event)=>setAge(event.target.value)} placeholder = "Enter age"></input>
                <br/>
                <button type = "submit">
                    Register
                </button>
            </form>
            
        </div>
    )
}
export default Register