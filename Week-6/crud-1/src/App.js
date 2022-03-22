import {useEffect,useState} from 'react'
import './App.css';
import PersonList from './components/PersonList';
import Form from './components/Form';

function App() {
  const [form,setform]=useState({
    name:"",
    lastname:"",
    email:"",
    password:"",
    comment:""
  }
  )
 

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
    <div className="App">
      <div className='row'>
      <Form 
      PersonList={PersonListe}
      setPersonList={setPersonList}
      form={form}
      setform={setform}
      />
      <PersonList 
      form={form}
      setform={setform}
      PersonList={PersonListe}
      setPersonList={setPersonList}
      getdata={getdata}
      />
      </div>
      
    </div>
  );
}

export default App;
