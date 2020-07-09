const axios = require('axios');
const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const api = axios.create({
    baseURL: proxyUrl+'https://iws9pqk8ui.execute-api.us-east-1.amazonaws.com/v1',
    headers: {
        'Content-Type': 'application/json'
    }
});

module.exports = api;