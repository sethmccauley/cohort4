import { City, Community } from './citycommunity-pojo.js';
import functions from './fetch.js';

test('Checking size of city object.', () => {
    let newCity = new City('Rome',41.902782,12.496365,0,1);
    expect(newCity.name).toBe('Rome');
    expect(newCity.howBig()).toBe('No Population');
    newCity.movedIn(1);
    expect(newCity.howBig()).toBe('Hamlet');
    newCity.movedIn(100);
    expect(newCity.howBig()).toBe('Village');
    newCity.movedIn(900);
    expect(newCity.howBig()).toBe('Town');
    newCity.movedIn(19000);
    expect(newCity.howBig()).toBe('Large Town');
    newCity.movedIn(100000);
    expect(newCity.howBig()).toBe('City');
    newCity.movedOut(1);
});

test('Testing single string show().', () => {
    let newCity = new City('Rome',1,2,3,1);
    expect(newCity.show()).toBe('Rome; Latitude: 1; Longitude: 2; Population: 3');
});

test('Testing result of lat response.', () => {
    let newCommunity = new Community();
    newCommunity.createCity('Sydney',-33.87,151,100000);
    newCommunity.createCity('Rome',41.902782,12.496365,1000000);

    expect(newCommunity.cityList.length).toBe(2);
    expect(newCommunity.whichSphere(newCommunity.cityList[0])).toBe('Southern Hemisphere');
    expect(newCommunity.whichSphere(newCommunity.cityList[1])).toBe('Northern Hemisphere');
});

test('Checking northern/southern comparisons.', () => {
    let newCommunity = new Community();
    newCommunity.createCity('Sydney',-33.87,151,100000);
    newCommunity.createCity('Rome',41.902782,12.496365,1000000);
    newCommunity.createCity('My Town',112,1.1241,131511);
    newCommunity.createCity('South Pole',-100,0,1);

    expect(newCommunity.getMostNorthern().name).toBe('My Town');
    expect(newCommunity.getMostSouthern().name).toBe('South Pole');
});

test('Checking addition of cities and removal working as intended.', () => {
    let newCommunity = new Community();
    newCommunity.createCity('Sydney',-33.87,151,100000);
    newCommunity.createCity('Rome',41.902782,12.496365,1000000);
    newCommunity.createCity('Lincoln',40.8135,-967026,300000)

    let lincoln = newCommunity.cityList[2];

    newCommunity.deleteCity(lincoln.id);
    expect(newCommunity.cityList.length).toBe(2);
});

test('Testing total Population summation.', () => {
    let newCommunity = new Community();
    newCommunity.createCity('Sydney',-33.87,151,100000);
    newCommunity.createCity('Rome',41.902782,12.496365,1000000);
    newCommunity.createCity('Lincoln',40.8135,-967026,300000);

    expect(newCommunity.getPopulation()).toBe(1400000);
});

test('Testing by object reference.', () => {
    let newCity = new City('Sydney',-33.87,151,100000)

    let myFav = newCity;
    expect(myFav.pop).toBe(newCity.pop);

    newCity.movedIn(20);
    expect(myFav.pop).toBe(newCity.pop);

    myFav.movedIn(20);
    expect(myFav.pop).toBe(newCity.pop);
})