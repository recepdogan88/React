import React from 'react'
import Form from './Form'
import PersonList from './PersonList'
import { useState } from 'react'

export default function Main({PersonListe,setPersonList,getdata}) {
    const [form,setform]=useState({
        name:"",
        lastname:"",
        email:"",
        password:"",
        comment:""
      }
      )
  return (
    <div>
        <div className='row'>
      <Form 
      PersonListe={PersonListe}
      setPersonList={setPersonList}
      form={form}
      setform={setform}
      />
      <PersonList 
      form={form}
      setform={setform}
      PersonListe={PersonListe}
      setPersonList={setPersonList}
      getdata={getdata}
      />
      </div>
    </div>
  )
}
