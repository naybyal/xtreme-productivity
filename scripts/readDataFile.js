const fs = require('fs');

const jsonData = fs.readFileSync('data.json', 'utf8');
const data = JSON.parse(jsonData);

console.log(data.tasks);
