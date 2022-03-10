import React, { useState } from "react";


export default function Addperson({addPerson}) {

  const [userName,setuserName]=useState("")//kullanici adi state
  const [mail,setmail]=useState("")//girilen mail adresini tutan state
  const [password,setpassword]=useState("")//girilen passswordun tutuldugu state
  const [passcheck,setpasscheck]=useState("")
  const [message, setMessage] = useState("");//girilen mailinin gecersiz oldugu durumda kullanilacak state

function handleClick(e){
  //onchange ile alinan input verileri butona tiklandiktan sonra validation yapilarak objeye atildi.
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
     else if(password!==passcheck){
       alert("Sifre uyusmadi")
     }
    else {
        alert("Login isleminiz basariyla tamamlandi")
    }
}
  return (
    <div>
        <form className="d-flex flex-column ">
            <h2 className="text-primary">SIGN UP</h2>
            <input type="text"className="form-control mt-3" placeholder="Username"  value={userName} onChange={(e) =>setuserName(e.target.value)} required />
            <input type="mail" className="form-control mt-4"placeholder="Email" value={mail} onChange={(e) =>setmail(e.target.value)}/>
            <span className="text-danger mt-2">{message}</span>
            <input type="password" placeholder="Password" className="form-control mt-4" value={password} onChange={(e) =>setpassword(e.target.value)}/>
            <input type="password" placeholder="Password Check" className="form-control mt-4" value={passcheck} onChange={(e) =>setpasscheck(e.target.value)}/>
            
        </form>
        <button type="submit" onClick={handleClick} className="mt-5 btn btn-primary btn-lg" >Sign up</button>
    </div>
  )
}
