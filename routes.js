const express = require('express');

//Controller imports
const CityController = require('./controllers/cityController')
const routes = express.Router();


//API Routes
routes.get('/api/search', (req,res,next) =>{ 
    let ts = Date.now();
    date_ob = new Date(ts);
    date = date_ob.getHours() + ":" + date_ob.getMinutes() + ":" + date_ob.getSeconds(); 
    console.log("**GET** => /api/search"); next()},  CityController.search);

routes.get('/api/top' , (req,res,next) =>{
    let ts = Date.now();
    date_ob = new Date(ts);
    date = date_ob.getHours() + ":" + date_ob.getMinutes() + ":" + date_ob.getSeconds();
    console.log(date +" **GET** => /api/top"); next() } ,CityController.top);

//Render the page
routes.get('/', (req,res) => {
    let ts = Date.now();
    date_ob = new Date(ts);
    date = date_ob.getHours() + ":" + date_ob.getMinutes() + ":" + date_ob.getSeconds();
    console.log(date +" **GET** => /");
    res.sendFile('index.html',{ root : "."})
});

module.exports = routes;