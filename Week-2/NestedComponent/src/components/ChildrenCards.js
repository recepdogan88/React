import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";
import ChildrenNumber from './ChildrenNumber';

export default function ChildrenCards(props){
  
    return (
          <Card className='col-3 ms-4 mt-3' style={{ width: '15rem',height:"20rem" }}>
              <Card.Img variant="top" src={props.picture} style={{ height: '8rem' }}/>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                <div className='d-flex justify-content-start flex-column text-start'>
              <div>Firstname : {props.ad}</div>
              <div>Gender : {props.soyadi}</div>
              <div>Birthday : {props.cinsiyet}</div>
              </div>
                </Card.Text>
              </Card.Body>
          </Card>
     
      
          
    )
}