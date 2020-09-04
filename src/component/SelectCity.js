import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCityWeather, addCityIds} from '../actions/actions';


const SelectCity = (props) => {
    const dispatch = useDispatch();
    const cityList = useSelector(state => state.cityList);
    const currentWeather = useSelector(state => state.curentWeather);
    const [searchList, setSearchList] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (inputValue.length > 2) {
            const searched = cityList.filter(city => city.name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
            setSearchList(searched);
        }
    }, [inputValue]);

    const setCity = (city) => {
        setInputValue(city.name);
        if(!currentWeather.has(city.id)) {
            dispatch(getCityWeather(city.id, dispatch));
        }
        dispatch(addCityIds(city.id, dispatch));
        setSearchList([]);
        setInputValue('');
    };

    return (
        <div className='select-wrapper'>
            <input
                onChange={e => setInputValue(e.target.value)}
                value={inputValue}
                placeholder='type city'
            />
            {searchList.length > 0
                ?   <div className='option-wrapper'>
                        {searchList.map(city => <div onClick={e => setCity(city)} key={city.id}>{city.name}</div>)}
                    </div>
                : null}
        </div>
    );
};

export default SelectCity;