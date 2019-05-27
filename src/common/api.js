// Base API Configuration

import axios from 'axios';

export const API = axios.create({
    baseURL: '//api.openweathermap.org/data/2.5/'
});

API.interceptors.request.use(function (config) {
    // Set common parameters for each request to the API.

    // APPID for OpenWeatherMap.org
    config.params.APPID = '7500887a8169c25dbba8293ea48ce39f';
    config.params.units = 'imperial';

    return config;
}, function (error) {
    return Promise.reject(error);
});