import React from 'react'
import {useState} from 'react'

export default function Form({PersonList,setPersonList}) {

    const [name,setname]=useState("")
    const [lastname,setlastname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [comment,setcomment]=useState("")

function postData(e){
  e.preventDefault();
   let newperson={
     firstName:name,
     lastName:lastname,
     email:email,
     password:password,
     about:comment
}
  setPersonList([...PersonList,newperson])
    fetch('http://localhost:3002/employee', {
            method: "POST",
            body: JSON.stringify(newperson),
            headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            .then(response => response.json()) 
            .then(json => console.log(json));
}

return (
    <div className='col-3 mt-5 ms-5 me-5'>
        <div className='bg-primary fs-2 text-center text-white p-1'>ADD PERSON</div>
        <form className='mt-4'onSubmit={postData}>
            <div class="mb-3">
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Firstname'onChange={(e)=>setname(e.target.value)} required/>
            </div>
            <div class="mb-3">
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"placeholder='Lastname'onChange={(e)=>setlastname(e.target.value)}required/>
            </div>
            <div class="mb-3">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"placeholder='Email'onChange={(e)=>setemail(e.target.value)} required></input>
            </div>
            <div class="mb-3">
                <input type="password" class="form-control" id="exampleInputPassword1"placeholder='Password'onChange={(e)=>setpassword(e.target.value)}required/>
            </div>
            <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{height: 130}}onChange={(e)=>setcomment(e.target.value)}></textarea>
                <label for="floatingTextarea">Comments</label>
            </div>
            <button type="submit" class="btn btn-primary mt-3"style={{height: 50,width:120 ,fontSize:25}}>Submit</button>
        </form>
    </div>
  )
}
