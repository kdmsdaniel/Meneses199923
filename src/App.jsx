import axios from 'axios';
import { useEffect, useState } from 'react';
import './style.css';

function App() {

     const [ weather ,setWeather ] = useState({});
     const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
       
        const success = pos => {
            const lat = pos.coords.latitude
            const lon = pos.coords.longitude
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=255a2683bd5ad3ec6d689e72383cce35`)
          
            .then(res => setWeather(res.data));
        }
        navigator.geolocation.getCurrentPosition(success);
    }, [])

    console.log(weather);
    return (
        <div className='App'>
       
               <h2>Wheather App</h2> 
                 <h2>{weather.name} / {weather.sys.country} </h2>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" />   
                <p>Actual temperature: {(weather.main.temp - 273.15).toFixed()}°C</p>
                 
                 <button onClick={() => setIsVisible(!isVisible)}> 
                  CLICK{isVisible && 
                 <h3> Fahrenheit:  {(((weather.main.temp - 273.15) * 9 / 5 ) + 32).toFixed(2)} °F </h3>
                 }
                 </button>
                <p>Min: {(weather.main.temp - 273.15).toFixed()}°C</p>
               <p>Max: {(weather.main.temp_max - 273.15).toFixed()}°C</p>    
           
               
           
        </div>
    )
}
export default App