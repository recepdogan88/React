import {useEffect,useState} from 'react'
import './App.css';
import PersonList from './components/PersonList';
import Form from './components/Form';

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
  console.log(PersonListe)

  return (
    <div className="App">
      <div className='row'>
      <Form 
      PersonList={PersonListe}
      setPersonList={setPersonList}
      />
      <PersonList PersonList={PersonListe}/>
      </div>
      
    </div>
  );
}

export default App;
