import InfoBox from './InfoBox'
import SearchBox from './SearchBox'
import { useState } from 'react'
import "./WeatherApp.css"

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
            city: "Delhi",
            feelsLike: 32.72,
            humidity: 26,
            temp: 34.05,
            tempMax: 34.05,
            tempMin: 34.05,
            weather: "haze"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div className="WeatherApp">
              <h2 style={{textAlign:"center"}}>Weather App By Shivam</h2>
                <SearchBox updateInfo ={updateInfo}/>
                <InfoBox info ={weatherInfo}/>
        </div>
    )
}
