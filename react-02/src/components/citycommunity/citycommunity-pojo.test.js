import { City, Community } from './citycommunity-pojo.js';
import functions from './fetch.js';

beforeEach( async () => {
    const resp = await functions.postData('http://127.0.0.1:5000/clear')
})

test('Checking size of city object.', async () => {
    let newCommunity = new Community();
    await newCommunity.createCity('Rome',41.902782,12.496365,0)
    expect(newCommunity.cityList[0].name).toBe('Rome');
    expect(newCommunity.cityList[0].howBig()).toBe('No Population');
    await newCommunity.cityList[0].movedIn(1);
    expect(newCommunity.cityList[0].howBig()).toBe('Hamlet');
    await newCommunity.cityList[0].movedIn(100);
    expect(newCommunity.cityList[0].howBig()).toBe('Village');
    await newCommunity.cityList[0].movedIn(900);
    expect(newCommunity.cityList[0].howBig()).toBe('Town');
    await newCommunity.cityList[0].movedIn(19000);
    expect(newCommunity.cityList[0].howBig()).toBe('Large Town');
    await newCommunity.cityList[0].movedIn(100000);
    expect(newCommunity.cityList[0].howBig()).toBe('City');
    await newCommunity.cityList[0].movedOut(1);
});

test('Testing single string show().', () => {
    let newCity = new City('Rome',1,2,3,1);
    expect(newCity.show()).toBe('Rome; Latitude: 1; Longitude: 2; Population: 3');
});

test('Testing result of lat response.', async () => {
    let newCommunity = new Community();
    await newCommunity.createCity('Sydney',-33.87,151,100000);
    await newCommunity.createCity('Rome',41.902782,12.496365,1000000);

    expect(newCommunity.cityList.length).toBe(2);
    expect(newCommunity.whichSphere(newCommunity.cityList[0])).toBe('Southern Hemisphere');
    expect(newCommunity.whichSphere(newCommunity.cityList[1])).toBe('Northern Hemisphere');
});

test('Checking northern/southern comparisons.', async () => {
    let newCommunity = new Community();
    await newCommunity.createCity('Sydney',-33.87,151,100000);
    await newCommunity.createCity('Rome',41.902782,12.496365,1000000);
    await newCommunity.createCity('My Town',112,1.1241,131511);
    await newCommunity.createCity('South Pole',-100,0,1);

    expect(newCommunity.getMostNorthern().name).toBe('My Town');
    expect(newCommunity.getMostSouthern().name).toBe('South Pole');
});

test('Checking addition of cities and removal working as intended.', async () => {
    let newCommunity = new Community();
    await newCommunity.createCity('Sydney',-33.87,151,100000);
    await newCommunity.createCity('Rome',41.902782,12.496365,1000000);
    await newCommunity.createCity('Lincoln',40.8135,-967026,300000)

    let lincoln = newCommunity.cityList[2];

    await newCommunity.deleteCity(lincoln.id);
    expect(newCommunity.cityList.length).toBe(2);
});

test('Testing total Population summation.', async () => {
    let newCommunity = new Community();
    await newCommunity.createCity('Sydney',-33.87,151,100000);
    await newCommunity.createCity('Rome',41.902782,12.496365,1000000);
    await newCommunity.createCity('Lincoln',40.8135,-967026,300000);

    expect(newCommunity.getPopulation()).toBe(1400000);
});

test('Getting initial cities. (Empty)', async () =>{
    let newCommunity = new Community();
    await newCommunity.createCity('Sydney',-33.87,151,100000);
    await newCommunity.createCity('Rome',41.902782,12.496365,1000000);
    await newCommunity.createCity('Lincoln',40.8135,-967026,300000);
    await newCommunity.getInitialCities()
})