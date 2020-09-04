import React from 'react';;
import {prettyData} from '../helper/dataHelper';

const DetailedWeatherDaily = (props) => {
    if (!props.weather) {
        return <div>...Loading...</div>
    }
    const {wind_speed, weather, dt, temp, sunrise, humidity} = props.weather;

    return (
        <div className='forecast-item daily'>
            <div className='city-date'>{prettyData.getDay(dt)} {prettyData.getMonthAndDay(dt)}</div>
            <div className='city-icon'><img src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`} /></div>
            <div className='temp'><span>day:</span> <span>{temp.day}</span></div>
            <div className='temp night'><span>night:</span> <span>{temp.night}</span></div>
            <div className='detailed-info'>
                <div className='wind'>{wind_speed}m/s <div>Wind</div></div>
                <div className='humidity'>{humidity}% <div>Humidity</div></div>
                <div className='sunrise'>{prettyData.getTime(sunrise)}<div>Sunrise</div></div>
            </div>
        </div>

    );
};
export default  DetailedWeatherDaily;