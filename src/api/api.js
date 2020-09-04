import { ENDPOINT_CURRENT_WEATHER, ENDPOINT_WEATHER_FORECAST } from './endpoints'

const filterErrorResponse = (response) =>
{
    if (response.status >= 400) {
        return Promise.reject('server response code is error (>400)');
    }

    return response;
};

const filterNonJsonResponse = (response) =>
{
    if (false === response.headers.has('content-type')) {
        return Promise.reject('unknown response content-type');
    }

    if (-1 === response.headers.get('content-type').indexOf('json')) {
        return Promise.reject('response is not json');
    }

    return response;
};

const sendGETRequest = (url) =>
{
    const options = {
        method: 'GET',
        mode: 'cors',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    };

    return fetch(url, options)
        .then(response => filterErrorResponse(response))
        .then(response => filterNonJsonResponse(response))
        .then(response => response.json())
        .catch(function(err) {
            console.log(err);
        });
};


export const forecastApi = {

    getCurentWeather: (id) => {
        return sendGETRequest(`${ENDPOINT_CURRENT_WEATHER}&id=${id}`)
            .then(
                results => results,
                error => {
                    console.log(error);
                    return [];
                }
            );
    },

    getWeatherForecast: (id, coord) => {
        return sendGETRequest(`${ENDPOINT_WEATHER_FORECAST}&id=${id}&lat=${coord.lat}&lon=${coord.lon}`)
            .then(
                results => results,
                error => {
                    console.log(error);
                    return [];
                }
            );
    }

};