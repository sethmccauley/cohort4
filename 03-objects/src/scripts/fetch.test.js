global.fetch = require('node-fetch');
import functions from './fetch.js';

const data = [
    {"name":"Želmíra","surname":"Bruško","gender":"female","region":"Slovakia"},
    {"name":"Denis","surname":"Datcu","gender":"male","region":"Romania"},
    {"name":"Millie","surname":"Cooper","gender":"female","region":"England"},
    {"name":"Adriána","surname":"Murín","gender":"female","region":"Slovakia"},
    {"name":"Laura","surname":"Stănculescu","gender":"female","region":"Romania"},
    {"name":"Μεταγένης","surname":"Νικολαΐδης","gender":"male","region":"Greece"},
    {"name":"Jack","surname":"Watson","gender":"male","region":"England"},
    {"name":"Irene","surname":"Morales","gender":"female","region":"Spain"},
    {"name":"Domnica","surname":"Orășan","gender":"female","region":"Romania"},
    {"name":"Helen","surname":"Davidson","gender":"female","region":"United States"}
];

const me = [
    {"name": "Seth","surname":"McCauley","gender":"male","region":"Nebraska"}
];

test('Attempting to return first name.', () => {
    expect(functions.getFirstName(data)).toBe('Želmíra');
});

test('Test to retrieve an array of all names.', () => {
    expect(functions.getAllFirstNames(data)).toEqual(['Želmíra','Denis','Millie','Adriána','Laura','Μεταγένης','Jack','Irene','Domnica','Helen'])
});

const url = 'http://localhost:5000/';

test('Checking the fetch request works.', async () => {
    const users = [{key:1,name:'Seth'},{key:2,name:'Madison'}]

    let data = await functions.postData(url + 'clear');
    //console.log('clear', data)

    data = await functions.postData(url + 'all');
    expect(data.status).toEqual(200);
    //console.log('all', data)

    data = await functions.postData(url + 'add', users[0]);
    expect(data.status).toEqual(200);
    //console.log('add', data)

    data = await functions.postData(url + 'all');
    expect(data.length).toBe(1);
    expect(data[0].name).toBe('Seth');
    //console.log('all', data)
});