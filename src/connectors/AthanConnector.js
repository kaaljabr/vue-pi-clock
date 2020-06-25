import axios from 'axios';
import https from 'https';

import Config from '../config/Config';

const agent = new https.Agent({ rejectUnauthorized: false });
console.log(Config.ATHAN_BASE_URL);

const instance = axios.create({
    baseURL: Config.ATHAN_BASE_URL,
    timeout: 5000,
    httpsAgent: agent,
    headers: {
        'Content-type': 'application/json',
        Accepts: 'application/json'
    },
});

export default instance;
