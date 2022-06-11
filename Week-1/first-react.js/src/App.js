//create-react-app diyerek react dosyasi olusturuldu.
//Bootstrap indirildi.
//Navbar Header componentin icinde olusturuldu.Export edildi.
//Card lar în yanyana siralanmasi icin row div olusturuldu.
//Card lar card.js componentinin cicnde olusturuldu ve export edildi.
//Footer componentin icine olusturulan div e icon eklendi ve export edildi.
//Olusturlan componentler app.js icinde import edildi.

import React from 'react';
import './App.css';
import Navbar from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from "./components/cards"
import Footer from './components/footer';

function App() {
  return (
    <>
      <Navbar/>
    <div class="row">
      <Cards/>
      <Cards/>
      <Cards/>
    </div>
    <Footer/>
   </>
  )
}

export default App;
