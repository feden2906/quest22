import axios from 'axios';

import { baseURL } from "../constants/configs";

export const $api = axios.create({
    withCredentials: true,
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
})
