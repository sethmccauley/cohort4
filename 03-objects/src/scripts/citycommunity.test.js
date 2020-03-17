import { City, Community } from './citycommunity.js';

test('Checking size of city object.', () => {
    let newCity = new City('Rome',41.902782,12.496365,0);
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
});

test('Testing single string show().', () => {
    let newCity = new City('Rome',1,2,3);
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

    expect(newCommunity.getMostNorthern().name).toBe('Rome');
    expect(newCommunity.getMostSouthern().name).toBe('Sydney');
});

test('Checking addition of cities and removal working as intended.', () => {
    let newCommunity = new Community();
    newCommunity.createCity('Sydney',-33.87,151,100000);
    newCommunity.createCity('Rome',41.902782,12.496365,1000000);
    newCommunity.createCity('Lincoln',40.8135,-967026,300000)

    let lincoln = newCommunity.cityList[2];

    newCommunity.deleteCity(lincoln);
    expect(newCommunity.cityList.length).toBe(2);
    // newCommunity.cityList.forEach(value => console.log(value.show()))
});

test('Testing total Population summation.', () => {
    let newCommunity = new Community();
    newCommunity.createCity('Sydney',-33.87,151,100000);
    newCommunity.createCity('Rome',41.902782,12.496365,1000000);
    newCommunity.createCity('Lincoln',40.8135,-967026,300000);

    expect(newCommunity.getPopulation()).toBe(1400000);
});