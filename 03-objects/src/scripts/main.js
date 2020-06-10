import { City, Community } from './citycommunity.js';
import functions from './fetch.js';

let cityController = new Community();
let keyNumber = 0;

window.addEventListener('DOMContentLoaded', async () => {
    let data = await functions.postData('http://localhost:5000/all')
    console.log('Data: ', data);
    data.forEach(value => {
        cityController.createCity(value.city.name, parseFloat(value.city.lat, 10), parseFloat(value.city.long, 10), parseFloat(value.city.pop, 10), value.key);
        document.getElementById('mainContent').appendChild(cityController.createCard(cityController.cityList[cityController.cityList.length - 1]));
        if (value.key >= keyNumber) keyNumber = value.key + 1;
    })
    updateSummary();
    hideAndShow();
});

addCity.addEventListener('click', async () => {
    cityController.createCity(document.getElementById('cityName').value,document.getElementById('cityLat').value,document.getElementById('cityLong').value,document.getElementById('cityPop').value,keyNumber);
    let confirmation = await functions.postData('http://localhost:5000/add',{"key": keyNumber, "city": cityController.cityList[cityController.cityList.length - 1]});
    if (confirmation.status == 200) {
        console.log('City Added to Remote.');
        keyNumber++;
        document.getElementById('mainContent').appendChild(cityController.createCard(cityController.cityList[cityController.cityList.length - 1]));
    } else {
        console.log(confirmation.status);
    }
    updateSummary();
    hideAndShow();
})

document.body.addEventListener('click', () => {
    updateSummary();
    hideAndShow();
})

function hideAndShow(){
    let summary = document.getElementById('summary');
    if( cityController.cityList.length > 0 ) {
        if (summary.className.indexOf("w3-show") == -1) {
            summary.className += " w3-show";
        }
    } else {
        summary.className = summary.className.replace(" w3-show", "");
    }
}

function updateSummary(){
    if( cityController.cityList.length > 0 ) {
        let northern = document.getElementById('mostNorthern');
        let southern = document.getElementById('mostSouthern');
        let totalPop = document.getElementById('totalPopulation');
        
        northern.textContent = cityController.getMostNorthern().name;
        southern.textContent = cityController.getMostSouthern().name;
        totalPop.textContent = cityController.getPopulation();
    }
}