import React, { useState ,useEffect} from 'react';
const api = {
  key: "4dea54a7e70eb45a49f29cb400091753",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  useEffect(() => {
    getdata()
  },[]);

  
const getdata= async ()=> {
  const response=await  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
  const newdata = await response.json();
  setWeather(newdata)
  console.log(newdata)
}
  
const search = e => {
 if (e.key === "Enter") {
    getdata()
    setQuery('');
   }
}
    
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
