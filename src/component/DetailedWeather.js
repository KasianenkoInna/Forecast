import React from 'react';
import {prettyData} from '../helper/dataHelper';


const DetailedWeather = (props) => {
    if (!props.weather) {
        return <div>...Loading...</div>
    }
    const {name, main, wind, weather, sys, dt} = props.weather;

    return (
            <div className='forecast-item'>
                <div className='city-name'>{name}</div>
                <div className='city-date'>{prettyData.getDay(dt)} {prettyData.getMonthAndDay(dt)}</div>
                <div className='city-icon'><img src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`} /></div>
                <div className='temp'>{main.temp}</div>
                <div className='detailed-info'>
                    <div className='wind'>{wind.speed}m/s <div>Wind</div></div>
                    <div className='humidity'>{main.humidity}% <div>Humidity</div></div>
                    {sys.sunrise ? <div className='sunrise'>{prettyData.getTime(sys.sunrise)}<div>Sunrise</div></div> : null}
                </div>
            </div>

    );
};
export default  DetailedWeather;