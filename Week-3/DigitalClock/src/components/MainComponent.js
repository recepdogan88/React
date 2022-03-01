/*
1-Create-react-app ile react dosyasi olusturuldu.
2-Npmden react bootstrap indirildi.
3-Dropdown button bootstarptan alindi.
2-Npm den clock indirildi.
3-Timezone degistirebilmek icin usestate olusturuldu.
4-Saatin uzerinde hangi ilin saati oldugunu gostermek icin name adinda usestate olusturuldu.
5-Indirilen button tiklandiginda yazilan timezone daki saat gosterilmesi icin onclick uygulandi.
6-Inline onclick fonksiyonun icinde butona tiklandiginda timezone ve name state i degistirildi.
*/


import React, { useState }  from 'react';
import Clock from 'react-live-clock';
import "bootstrap/dist/css/bootstrap.min.css";
import { DropdownButton, Dropdown,Container,Row,Col} from "react-bootstrap";
import Title from './Title';



export default function MainComponent () {

    //butona basildiginda timezone degistirebilmek icin timezone state ve name state
    const [Timezone,setTimezone]=useState('Asia/Tokyo')
    const [Name ,setName]=useState("Tokyo")

    //inline onclick ile bu state ler degistirlmistir.
    return (
        <Container >
            <Row className='mt-5'>
                <Title/>
                <h4 className='mt-3 me-5'>{Name}</h4>
            </Row>
        <Row md={4}>
                <Col ></Col>
                <Col xs={6}>
                <Clock  className="mt-3" format={'HH:mm:ss'} style={{fontSize: '4.5em',fontWeight: "bold"}} ticking={true} timezone={Timezone} />
                </Col>
                <Col>
                <DropdownButton className="mt-5 ms-5" id="dropdown-basic-button" title="Dropdown button">
                                <Dropdown.Item href="#/action-3" onClick={() => {setTimezone("Asia/Tokyo");setName("Tokyo");}}>Tokyo</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" onClick={() => {setTimezone("Europe/Paris");setName("Zurih");}}>Zurih</Dropdown.Item>
                                <Dropdown.Item href="#/action-1" onClick={() => {setTimezone("America/New_York");setName("Newyork");}}>Newyork</Dropdown.Item>
                </DropdownButton>
                </Col>
        </Row>

 
</Container>
   )

}      