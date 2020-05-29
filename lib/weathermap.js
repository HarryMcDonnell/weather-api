const fetch = require('node-fetch');
const APPID = '852c498443e939a09e606fcb7b8f6cdd';
const URI = `https://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${APPID}`;
const getWeather = async() => {
	let data = await fetch(URI);
	let JSObject = await data.json();
	return JSObject;
}
module.exports = getWeather;