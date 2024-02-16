import fs from 'fs';

const response = JSON.parse(fs.readFileSync('response.json', 'utf8'));

const mappedArray = response.map(person => ({
  name: person.name,
  year: person.vehicle.year
}));

const filteredArray = mappedArray.filter(person => person.year > 2020);

console.log(filteredArray);
