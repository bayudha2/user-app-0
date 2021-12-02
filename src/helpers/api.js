/* eslint-disable no-param-reassign */
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL_API;

const apiClient = axios.create({
    baseURL: BASE_URL,
});

const {
    get, post, put, delete: destroy,
} = apiClient;
export {
    get, post, put, destroy,
};
