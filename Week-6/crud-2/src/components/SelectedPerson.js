import React from 'react'
import { useParams,useNavigate} from 'react-router-dom'

export default function SelectedPerson({PersonListe}) {
    const navigate = useNavigate();
    const{id}=useParams()
    
  return (
    <div>
     
  {PersonListe.filter(person=>person.id==id).map(person=>(
            <div className='mt-5 ms-5' key={person.id}>
              <div className='fs-1 fw-bold'>First name  : {person.firstName}</div>
              <div className="fs-1 fw-bold">Last Name   : {person.lastName}</div>
              <div className='fs-1 fw-bold'>Email       : {person.email}</div>
              <div className='fs-1 fw-bold'>About       : {person.about}</div>
            </div>
        ))}
        <button class="btn btn-primary ms-5 mt-3 btn-lg" onClick={()=>{navigate("/");}}>BACK HOME PAGE</button>
    </div>
  )
}
