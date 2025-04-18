const fs = require('fs');
const path = require('path');

const logStream = fs.createWriteStream(
  path.join(__dirname, '../logs/requests.log'), 
  { flags: 'a' }
);

const logMapping = (input, output) => {
  const logEntry = {
    timestamp: new Date().toISOString(),
    input,
    output
  };
  
  logStream.write(JSON.stringify(logEntry) + '\n');
};

module.exports = { logMapping };