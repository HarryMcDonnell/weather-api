//npm i node-fetch
//const fetch = require('node-fetch');
//const fs = require('fs');
const express = require('express');
const app = express();

const hbs = require('express-handlebars'); //npm i express-handlebars
const path = require('path'); //built in module

//const APPID = '852c498443e939a09e606fcb7b8f6cdd'; 
//const url = `http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${APPID}`;

const weatherMap = require('./lib/weathermap');
// require('dotenv').config();

app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'
}));
app.set('view engine', '.hbs');

// const getWeather = async() => {
//     let data = await fetch(url);
//     let jsonData = await data.json();
//     // fs.writeFileSync('data.json', JSON.stringify(jsonData))
//     console.log(jsonData);
// }
app.get('/', async (req,res) => {
    let data = await weatherMap(); //single import so no dot notation
    console.log(data)
    let allData = JSON.stringify(data, null, 1);
    let minTemp = Math.floor((data.main.temp_min - 272));
    let maxTemp = Math.floor((data.main.temp_max - 272));
    let temp = Math.floor((data.main.temp - 272));
    res.render('index', { allData, temp, minTemp, maxTemp })
})
app.listen(3000, () => {
	console.log('listening on port 3000');
});

//getWeather();