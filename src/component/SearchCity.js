import React from 'react';
import {useSelector } from 'react-redux';
import { Link }  from 'react-router-dom';
import {routes} from '../routes/routes';
import DetailedWeather from "./DetailedWeather";
import SelectCity from "./SelectCity";
import HistoryWeather from "./HistoryWeather";

const SearchCity = () => {
    const curentWeather = useSelector(state => state.curentWeather);
    const ids = useSelector(state => state.cityIds);

    const weather = curentWeather.get(ids[0]);

    return (
        <div className='wrapper'>
            <SelectCity />
            <div>{weather
                ?   <Link to={routes.CITY_WEATHER_FORECAST(ids[0])} >
                        <DetailedWeather weather={weather}/>
                    </Link>
                : null}
            </div>
            {ids.length > 0 ? <HistoryWeather /> : null}
        </div>
    );
};
export default SearchCity;