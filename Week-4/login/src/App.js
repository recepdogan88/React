import './App.css';
import AddPerson from "./component/AddPerson";
import PersonList from "./component/PersonList";
import React, { useState } from "react";




function App() {

  const [personList,setPersonList]=useState([])
  
  function addPerson (pNewPerson){
    setPersonList([...personList,pNewPerson])
  }

  return (
    <div className="App ms-5 mt-5 col-3">
      <AddPerson addPerson={addPerson} />
      <PersonList personList={personList} />
    </div>
     
  );
}

export default App;
