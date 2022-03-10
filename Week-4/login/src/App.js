import './App.css';
import AddPerson from "./component/AddPerson";

import React, { useState } from "react";
/*
-Inputtan alinacak verilerin duzenlecegi ve eklencegi addperson componenti olusturuldu.
-Addperson conmonenti icinde Inputa girilen verileri newperson isminde objeye usestae ve onchange eventi ile kaydedildi.
-Olusturulan newperson objesinin gonderilecegi personList adinda state dizi olarak olusturuldu.(app.js icinde)
-Props ile app.js olusturulan ici bos diziden olusan state addperson componentine gonderildi.
-Addperson fonksiyonunda reacta uygun push methodu ile gonderilen inputtan alinan objenin diziye gonderilecegi bir fonk yazildi.
-Props methodu ile app.js de olusturulan bu fonksiyon inputtn verilerin alindigi addperson componentine gonderildi.
-Veriler alindiktan sonra listeleme yaprak inputun altinda yazdirma islemi yapilacak personlist componenti olusturuldu.
-Bu componente app.js de olustuurlan personlist props ile gonderildi.
-Addperson componentinin icinde validation yapildiktan sonra veriler objeye atildi.
-Ve ebu componentin icinde gelen liste yadirildi.
*/



function App() {

  
  
  
  

  return (
    <div className="App ms-5 mt-5 col-3">
      <AddPerson  />
      
    </div>
     
  );
}

export default App;
