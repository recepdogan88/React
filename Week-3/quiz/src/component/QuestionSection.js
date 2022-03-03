import React from 'react'
import { useState } from 'react'
import NextQuestion from './NextQuestion'

function QuestionSection(props) {
   const RandomNumber=Math.floor(Math.random() * 4)//datanin icinde random gezmek icin olusturlacak questionNr state ne baslangic degeri
   const newdata=props.question //props ile alinan data her seferinde uzun yazilmamasi icin degiskene atandi.
   const [questionNr,setquestionNr]=useState(RandomNumber)
   const[Correctscore,setCorrectScore]=useState(0)//dogru cevap verildiginde skoru artirmak icin olusturulan state
   const[Falsescore,setFalsescore]=useState(0)//yanlis cevap verildiginde skoru artirmak icin olusturulan state
   const [color,setColor]=useState("btn btn-warning ms-2 fs-2 text-dark")//butona basildiginda rengi degistirmesi icin class state
 

function CorrectButton(PisCorrect){
      if(PisCorrect==true){
      setCorrectScore(Correctscore+1)
      setColor("btn btn-warning ms-2 fs-2 text-success")
      }
      else{
      setFalsescore(Falsescore+1)
      setColor("btn btn-warning ms-2 fs-2 text-danger")
      }
}
 
  return (
    <div>
         <NextQuestion  //data ve stateler alindi.
         data={newdata}
         questionNr={questionNr}
         setquestionNr={setquestionNr}
         color={color}
         setColor={setColor}
         />
        <div className='row mt-5 d.flex flex-row'>
        <div className='fs-2 text-center border bg-primary pt-4' style={{width:200, height: 100,}}>{newdata[questionNr].question}</div>
        {newdata[questionNr].options.map((ask,index)=>(//datanin icinde random gezilerek cevap secenkelri yazdirildi.
        <button key={index} type="button" className={color} style={{width:200, height: 100,color:"green"}} onClick={()=>CorrectButton(ask.isCorrect)} >{ask.answerText}</button>
    ))}
        </div>
        <div className='row mt-5'>
            <div className='fs-5 text-center border me-4 bg-success pt-2' style={{width:150, height: 50}}>Correct : {Correctscore}</div>  
            <div className='fs-5 text-center border ms-5 bg-danger pt-2' style={{width:150, height: 50}}>False :{Falsescore}</div>
        </div>           
    </div>
  )
}

export default QuestionSection