import axios from 'axios';

const HttpController = axios.create({
    baseURL: 'https://xi.test.network/'
});

export default HttpController;