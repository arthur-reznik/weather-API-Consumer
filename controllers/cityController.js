const City = require('../models/city')
const axios = require('axios')
const {APIkey} = require('../config/api.json')

module.exports.search = async (req,res) => {
    console.log("Busca Recebida")
    try{
        //Pega o nome da cidade nos parametros da url
        cidade = req.query.name

        //Consome a API
        let apiCall = await axios.get('https://api.openweathermap.org/data/2.5/weather?q='+cidade+'&appid='+APIkey+"&units=metric&lang=pt_br");

        //Procura se a cidade ja esta no banco e adiciona se não estiver
        let city = await City.findByPk(apiCall.data.id);
        if(city == undefined){
            city = await City.create({id : apiCall.data.id, name : apiCall.data.name, country : apiCall.data.sys.country});
        }
        city.count++;
        city.save();
        res.send(apiCall.data);
    }
    catch(err){
        console.log(err)
        res.status(400).send("Busca Invalida");
    }
}

module.exports.top = async(req,res) => {
    let top = []
    cities = await City.findAll({limit : 5, order : [['count', 'DESC']] })
    cities.forEach( city => {
        top.push(city.dataValues);
    });

    res.status(200).send(top)
}