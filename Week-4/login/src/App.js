import './App.css';
import AddPerson from "./component/AddPerson";
import PersonList from "./component/PersonList";
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
-V ebu componentin icinde gelen liste yadirildi.
*/



function App() {

  const [personList,setPersonList]=useState([])
  
  //addperson componentinin icinde alinan veri objeye atildiktan objenin  yukarudaki state atilacagi fonksiyon.
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
