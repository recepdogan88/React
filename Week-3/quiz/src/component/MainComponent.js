import React, { useState } from 'react'
import Header from './Header'
import NextQuestion from './NextQuestion'
import QuestionSection from './QuestionSection'


function MainComponent(props) {
 
  return (
    <div className='row'>
        <Header/>
        <QuestionSection question={props.data}/>
    </div>
  )
}

export default MainComponent