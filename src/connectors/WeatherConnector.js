import axios from 'axios';
import https from 'https';

import Config from '../config/Config';

const agent = new https.Agent({ rejectUnauthorized: false });
const WEATHER_BASE_URL = Config.WEATHER_BASE_URL;
console.log(WEATHER_BASE_URL)

const instance = axios.create({
    baseURL: WEATHER_BASE_URL,
    timeout: 5000,
    httpsAgent: agent,
    headers: {
        'Content-type': 'application/json',
        Accepts: 'application/json'
    },
});

export default instance;
