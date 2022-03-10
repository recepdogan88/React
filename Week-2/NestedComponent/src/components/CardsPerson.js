import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";

export default function CardsPerson(props){
  
    return (
      <section className='ms-2'>
     <div className='bg-danger'style={{ height: '3rem' }}>
      <p className='text-white fs-3 text-start ms-2'>Person</p>
     </div>
  <Card className='mt-3'>
        <Card.Img variant="top" src={props.picture} style={{ height: '20rem' }}/>
        <Card.Body>
          <Card.Title> </Card.Title>
          <Card.Text>
            <div className='d-flex justify-content-start flex-column text-start'>
            <div>Firstname : {props.name}</div>
            <div>Lastname : {props.lastname}</div>
            <div>Adress : {props.adres}</div>
            <div>Salary : {props.salary}</div>
            <div>Gender : {props.gender}</div>
            <div>E-Mail : {props.mail}</div>
            </div>
            
          </Card.Text>
        </Card.Body>
      </Card>
      </section>
    
    )
}