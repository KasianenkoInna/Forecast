import React from "react";
import {useSelector} from "react-redux";

import HistoryItem from './HistoryItem';

const HistoryWeather = () => {
    const ids = useSelector(state => state.cityIds);
    console.log(ids);

    if (0 >= ids.length) {
        return null;
    }

    return (
        <div className='history-wrapper'>
            <div>History</div>
            {ids.map(id => <HistoryItem  key={id} id={id}/>)}
        </div>
    )
};
 export default HistoryWeather;