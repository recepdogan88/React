import React, { useState ,useEffect} from 'react';
/*
-Fetch api ile hava durumu api den data alindi.
-Girilen sehir adini tutmak icin Query adinda usestate olusuturuldu.
-Girilen sehir adi ile alinacak datanin tutulmasi icin weather state olusturuldu.
-Data farkli yerlerde kullanilabilmek icin fonk icinde alindi.
-Olusturulan fonk useEffect icinde cagrildi verilerin guncel olmasi icin.
-Query kismina onkeypress eventi uygulandi.
-Onchange eventinden dolayi her harf girildiginde data alinmamasi 
icin sehir ismi girilip enter a basildiktan sonra datanin alindigi fonk cagrildi.
*/

const api = {
  key: "4dea54a7e70eb45a49f29cb400091753",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');//query kismina girilen sehir isminin tutldugu state
  const [weather, setWeather] = useState({});//sehir ismine gore gelen datanin tutldugu state

//guncel hava durumunu almak icin useEffect icine datanin alindigi fonk konuldu
  useEffect(() => {
    getdata()
  },[]);

//fetch api ile alinan data birden fazla yerden kullanilabilmesi icin fonk icine konuldu
const getdata= async ()=> {
  const response=await  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
  const newdata = await response.json();
  setWeather(newdata)
  console.log(newdata)
}

//query kismina city adi girildikten sonra enter tusuna basildiginda asagidaki fonk calistirildi
const search = e => {
 if (e.key === "Enter") {
    getdata()
    setQuery('');
   }
}
//city adi girildikten sonra hava durumu bilgileri gelen data asagida render edildi.  
  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Enter a city name"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
       
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main} </div>
          </div>
         
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
