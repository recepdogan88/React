import './App.css';
import Main from './components/Main';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SelectedPerson from './components/SelectedPerson';
import { useState,useEffect } from 'react'


function App() {
  const [PersonListe,setPersonList]=useState([])
  useEffect(() => {
    getdata()
  },[]);

  async function getdata(){
    const response =await fetch('http://localhost:3002/employee')
    const data =await response.json()
    setPersonList(data)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main PersonListe={PersonListe} setPersonList={setPersonList} getdata={getdata()}/>}></Route> 
        <Route path="/person/:id" element={<SelectedPerson PersonListe={PersonListe}/>}></Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
