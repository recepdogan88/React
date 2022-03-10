import MainComponent from './component/MainComponent';
import './App.css';
import questions from "./data/questions.json"
/*
1-Bootstrap yuklendi.
2-Data dosyasinin icinde question.js adindaki dosanin icinde data olusturldu.
3-App js in icine import edildi.
4-Tum componenntlerin birlestirilcegi main component olusturldu.
5-Quizinin adinin yazildigi baslik header componentin icine yazilarak main componentte import edildi.
6-QuestionSection componentinin icinde main componentten props ile data alindi.
7-Datanin icinde sorunun ve cevap secenekleri ayni obje icinde oldugu icin ilk ekrana yansitilicak objeyi state 
questionNr olarak yazildi ve baslangic degeri random number ile belirlendi.
8-Random number ile belirlenen objenin icindeki cevap seceneklerinin oldugu dizi map ile gezilip ekran buton olarak yazdirildi.
9-Butonlara onclick event uygulandi.Parametre olarak cevap optionslarinin icindeki isCorrect alindi.
isCorrect eger true ise corrrect adinda belirlenen state 1 artirildi eger false ise false adinda verilen state 1 artirildi.
10-NextQuestion componentinin icinde next butonu olusturuldu ve kacinci soruda olundugunu gostermek icin QuestionNumber adinda state 
olusturuldu ve next butonuna tiklandiginda 1 artirildi.
11-NextQuestion componenti QuestionSection componenti icinde tanimlandi ve ordan data ile state ler props yoluyla alindi.
12-Dizinin icinde random gezilmesi icin oluturulan state next butonuna basildiginda tekrar bir random sayi ile degistirildi.
13-Quiz 5 soruluk olarak belirlendi ve 5. sorudan sonra alert ile oyun bitirildi.
14-Quiz bitirildigi icin correct ve false state leri sifirlandi.
15-Random olarak tekrar soru getirldi question sayisi 1 olarak degistirildi.
*/
function App() {
  return (
    <div id='app' className="App">
      
       <MainComponent data={questions}/>
    </div>
  );
}
export default App;
