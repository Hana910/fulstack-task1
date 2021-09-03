//var axios = require("axios").default;
const express= require('express');
const axios = require("axios");
//const Api=express();
//const { render } = require('ejs');
//const Routing=require('./Routing');
//const weather=require('./weather');
const Api=express.Router();
Api.get('/weather',(req,res)=>{
var options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/timezone.json',
  params: {q: '48.8567,2.3508'},
  headers: {
    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
    'x-rapidapi-key': '288e36f585mshf3e766fcc907094p1659b3jsn8fe3c365042d'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
//response.render('weather',{weather:response.data,title:'weather'});
	//res.render('weather',{weather:response.data,title:'weather'});
  //res.render('weather',{name:response.data[0],region:response.data[1],country:response.data[2],lat:response.data[3],lon:response.data[4],tz_id:response.data[5],localtime_epoch:response.data[6],localtime:response.data[7],title:'weather'})
});
module.exports=Api;