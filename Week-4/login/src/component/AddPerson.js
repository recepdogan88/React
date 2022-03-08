import React, { useState } from "react";


export default function Addperson({addPerson}) {

  const [userName,setuserName]=useState("")
  const [mail,setmail]=useState("")
  const [password,setpassword]=useState("")
  const [passcheck,setpasscheck]=useState("")
  const [message, setMessage] = useState("");

  function handleClick(e){
   e.preventDefault();
     const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
     const newPerson={
        userName:userName,
        mail:mail,
        password:password
     }
     if(password==passcheck){
        addPerson(newPerson)
     } 
     
     
    if(!password==passcheck) {
        alert("Passwordunuz yanlis girildi")
    }
}

  return (
    <div>
        <form className="d-flex flex-column ">
            <h2 className="text-primary">SIGN UP</h2>
            <input type="text"className="form-control mt-3"   value={userName} onChange={(e) =>setuserName(e.target.value)} required />
            <input type="mail" className="form-control mt-4" value={mail} onChange={(e) =>setmail(e.target.value)}/>
            <span className="text-danger mt-2">{message}</span>
            <input type="password" className="form-control mt-4" value={password} onChange={(e) =>setpassword(e.target.value)}/>
            <input type="password" className="form-control mt-4" value={passcheck} onChange={(e) =>setpasscheck(e.target.value)}/>
        </form>
        <button type="submit" onClick={handleClick} className="mt-5 btn btn-primary btn-lg" >Sign up</button>
    </div>
  )
}
