import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {routes} from "../routes/routes";
import {Link} from "react-router-dom";
import {getCityWeather} from "../actions/actions";

const HistoryWeather = (props) => {
    const dispatch = useDispatch();
    const curentWeather = useSelector(state => state.curentWeather);
    const id = +props.id;
    console.log(curentWeather);

    useEffect(() => {
        if(undefined === curentWeather.get(id)) {
            dispatch(getCityWeather(id, dispatch));
        }
    }, []);

    const value = curentWeather.get(id);

    if (!value) {
        return  <div>...Loading...</div>
    }

    return ( <Link to={routes.CITY_WEATHER_FORECAST(id)} className='history-item'>
        <span>{value.name}</span>
        <span>{value.main.temp}</span>
    </Link>)

};
export default HistoryWeather;