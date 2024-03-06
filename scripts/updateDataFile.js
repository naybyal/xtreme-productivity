const fs = require('fs');

const jsonData = fs.readFileSync('data.json', 'utf8');
const data = JSON.parse(jsonData);

data.tasks.push('New Task');

const updatedJsonData = JSON.stringify(data, null, 2);
fs.writeFileSync('data.json', updatedJsonData);
