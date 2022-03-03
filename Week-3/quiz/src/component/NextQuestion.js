import React, { useState } from 'react'

function NextQuestion(props) {
  const  data=props.data
  const questionNr=props.questionNr
  const settquestionNr=props.setquestionNr
  const color=props.color
  const settColor=props.setColor
  const [QuestionNumber,setQuestionNumber]=useState(1)//next butonuna basildiginda kacinci soruda olundugunu gostermesi icin olusturulan state


function Next(){//next butonuna uygulanan onclick hem dizinin icinde random gezilecek sayi degistirldi hemde kacinci soruda oldugunu gosteren state degistirildi
  //4 soruluk bi quiz olmasi icin 4.sorudan sonra alert ile quiz bitirilip state ler guncellendi.
  settColor("btn btn-warning ms-2 fs-2 text-dark")
  setQuestionNumber(QuestionNumber+1)
  settquestionNr(Math.floor(Math.random() * 7))
    if(settquestionNr>data.length){
        settquestionNr(Math.floor(Math.random() * 4))
    }
    if(QuestionNumber>4){
        alert("GAME OVER QUIZE BASLAMAK ICIN SAYFAYI YENILEYINIZ")
        setQuestionNumber(1)
    }
   
    
   }
  return (
    <div>
        <div className='row me-5'>
                <button className='mt-5 fs-3 fw-bold rounded bg-warning' style={{width:200, height: 50}} onClick={Next}>NEXT</button>
        </div>  
        <div className='row mt-5'>
                <p className='fs-3 fw-bold me-5 border bg-warning text-center 'style={{width:200, height: 50}}>QUESTION {QuestionNumber} </p>
        </div> 
   </div>
  )
}

export default NextQuestion