import {Link} from "react-router-dom"
import React from 'react'
import {useState} from 'react'


export default function PersonList({PersonListe,setPersonList}) {

const [userid,setuserid]=useState(2)
const [edited,setedited]=useState(false)
const [editform,seteditform]=useState({
  name:"",
  lastname:"",
  email:"",
  password:"",
  comment:""
})
const [current,setcurrent]=useState({
  name:"",
  lastname:"",
  email:"",
  password:"",
  comment:""
})


async function update(e, id){
 seteditform({
    name:current.name,
    lastname:current.lastname,
    email:current.email,
    password:current.password,
    comment:current.comment,
    id:current.id
  })
  setedited(false)
  e.preventDefault();
  console.log(current)
  await fetch(`http://localhost:3002/employee/${id}`, {
      method: 'PUT',
      body:JSON.stringify(editform)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
      })
   })
}


function selectedPerson(id){
  let newid=id
  setuserid(newid)
  console.log(userid)
  setedited(true)
  console.log(id)
  let item=PersonList.find(person =>person.id==id)
  console.log(item)
  setcurrent({name:item.name})
  setuserid(item.id)
  setcurrent({
    name:item.firstName,
    lastname:item.lastName,
    email:item.email,
    password:item.password,
    comment:item.comment
  })
}

async function deletePerson(Pid){
        const baseURL=`http://localhost:3002/employee/${Pid}`
    await    fetch(baseURL,{
            method:"DELETE"
       })
  let filteredList=PersonList.filter(person =>person.id!==Pid)
  setPersonList(filteredList)
 
}
 
  return (
    <>
    <div className='col-6 mt-5 ms-5'>
      <div className='bg-primary fs-2 text-center text-white p-1'>PERSON LIST</div>
    <table className="table mt-3">
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">About</th>
    </tr>
  </thead>
  <tbody>
  {PersonListe.map((person,index )=>(
              <tr key={index}>
                  <td className='td'>{person.firstName}</td>
                  <td>{person.lastName}</td>
                  <td>{person.email}</td>
                  <td>{person.password}</td>
                  <td>{person.about}</td>
                  <td><button type="button"onClick={()=>deletePerson(person.id)} class="btn btn-outline-danger">Delete</button></td>
                  <td><button type="button"onClick={()=>selectedPerson(person.id)} class="btn btn-outline-danger">Edit</button></td>
                  <td> <Link to={`/person/${person.id}`}><button class="btn btn-outline-primary">VIEW</button></Link></td>
              </tr>
      ))}
      {edited ? <div className='mt-5'>
        <input value={current.name} onChange={(e)=>setcurrent({firstName:e.target.value})}></input>
        <input value={current.lastname} onChange={(e)=>setcurrent({lastName:e.target.value})}></input>
        <input value={current.email}onChange={(e)=>setcurrent({email:e.target.value})}></input>
        <input value={current.password}onChange={(e)=>setcurrent({password:e.target.value})}></input>
        <input value={current.comment}onChange={(e)=>setcurrent({comment:e.target.value})}></input>
        <button onClick={update} className="btn">update</button>
       
                 </div>:""}
  </tbody>
</table>
    </div>
    </>
  )
}
