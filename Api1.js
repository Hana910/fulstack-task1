const express = require('express');
const axios = require("axios").default;
const climat = require('./models/ApiData');

const Api1 = express.Router();
Api1.get('/', (req, res) => {
var options = {
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/find',
  params: {
    q: 'london',
    cnt: '1',
    mode: 'null',
    lon: '0',
    type: 'link, accurate',
    lat: '0',
    units: 'imperial, metric'
  },
  headers: {
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
    'x-rapidapi-key': '288e36f585mshf3e766fcc907094p1659b3jsn8fe3c365042d'
  }
};

  axios.request(options).then(function (response) {
    const climat= new climat({name: response.data.name, temp: response.data.main.temp, wind: response.data.wind.speed});
    climat.save();
    res.render('weather', { title: 'weather' , climat: response.data});
  }).catch(function (error) {
    console.error(error);
  });
  
});

module.exports = Api1;