import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";

export default function Friends(props){
    return (
<Card className='col-3 mt-5 ms-4' style={{ width: '15rem',height:"20rem" }}>
  <Card.Img variant="top" src={props.picture}style={{ height: '8rem',width:"15rem" }} />
  <Card.Body>
    <Card.Title></Card.Title>
    <Card.Text>
    <div className='d-flex justify-content-start flex-column text-start'>
            <div>Firstname : {props.fname}</div>
            <div>Gender : {props.gender}</div>
            <div>Birthday : {props.birthady}</div>
            <div>Phone : {props.phone}</div>
    </div>
    </Card.Text>
    
  </Card.Body>
</Card>
    )
}