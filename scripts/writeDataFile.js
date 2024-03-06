const fs = require('fs');

const data = { tasks: ['Task 1', 'Task 2', 'Task 3'] };
const jsonData = JSON.stringify(data, null, 2);

fs.writeFileSync('data.json', jsonData);
