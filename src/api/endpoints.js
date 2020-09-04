export const PROTOCOL_HTTP = 'http';
export const PROTOCOL_HTTPS = 'https';

export const BASE_URL = "api.openweathermap.org";

export const CURENT_WEATHER = 'data/2.5/weather';
export const WEATHER_FORECAST = 'data/2.5/onecall';

export const APPID = '2fc45975ce9acc773d98d42cbe19c527';
export const UNITS = 'metric';
export const LANG = 'en';
export  const EXCLUDE = 'minutely,hourly';

export const ENDPOINT_CURRENT_WEATHER = `${PROTOCOL_HTTP}://${BASE_URL}/${CURENT_WEATHER}?appid=${APPID}&units=${UNITS}&lang=${LANG}`;
export const ENDPOINT_WEATHER_FORECAST = `${PROTOCOL_HTTPS}://${BASE_URL}/${WEATHER_FORECAST}?appid=${APPID}&units=${UNITS}&lang=${LANG}&exclude=${EXCLUDE}`;


