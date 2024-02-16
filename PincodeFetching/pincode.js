import fetch from 'node-fetch';
import querystring from 'querystring';

const baseUrl = 'https://api.data.gov.in/resource/6176ee09-3d56-4a3b-8115-21841576b2f6';

const createRequestUrl = (offset) => {
    const parameters = {
        'api-key': '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b',
        format: 'json',
        limit: 10,
        offset,
    };
    return `${baseUrl}?${querystring.stringify(parameters)}`;
};

const fetchData = async (offset) => {
    const response = await fetch(createRequestUrl(offset));
    return (await response.json()).records;
};

const offsets = [31, 51, 61];

const dataArray = await Promise.all(offsets.map(offset => fetchData(offset)));
const combinedData = dataArray.flat();

console.log('Combined Data:');
console.log(combinedData);
console.log('Execution complete.');
