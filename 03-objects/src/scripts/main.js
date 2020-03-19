import { City, Community } from './citycommunity.js';
import functions from './fetch.js';

let cityController = new Community();
let keyNumber = 0;

window.addEventListener('DOMContentLoaded', async () => {
    let data = await functions.postData('http://localhost:5000/all')
    console.log('Data: ', data);
    data.forEach(value => {
        keyNumber++;
        console.log(value.city);
        console.log(keyNumber);
        cityController.createCity(value.city.name, value.city.lat, value.city.long, value.city.pop);
        document.getElementById('mainContent').appendChild(cityController.createCard(cityController.cityList[cityController.cityList.length - 1]));
    })
});

addCity.addEventListener('click', async () => {
    cityController.createCity(document.getElementById('cityName').value,document.getElementById('cityLat').value,document.getElementById('cityLong').value,document.getElementById('cityPop').value);
    console.log(document.getElementById('cityName').value,document.getElementById('cityLat').value,document.getElementById('cityLong').value,document.getElementById('cityPop').value)
    console.log(cityController.cityList[cityController.cityList.length - 1])
    let confirmation = await functions.postData('http://localhost:5000/add',{key: keyNumber, city: cityController.cityList[cityController.cityList.length - 1]});
    if (confirmation.status == 200) {
        console.log('City Added to Remote.');
        keyNumber++;
        document.getElementById('mainContent').appendChild(cityController.createCard(cityController.cityList[cityController.cityList.length - 1]));
    } else {
        console.log(confirmation.status);
    }

})