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
]

test('Attempting to return first name.', () => {
    expect(functions.getFirstName(data)).toBe('Želmíra');
});