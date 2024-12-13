const winston = require('winston');
const time = require('./realtime');
const currentday = require('./today');

console.log(`Today is: ${currentday.currentday}`);
console.log(`Time: ${time}`);

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: `logs/daily/${currentday.year}/${currentday.month}/${currentday.currentday}.log`, level: 'info' }),
    new winston.transports.File({ filename: `logs/daily/${currentday.year}/${currentday.month}/${currentday.currentday}.log`, level: 'error' }),
    
  ]
});

// const logger = winston.createLogger({
//   level: 'info',
//   format: winston.format.json(),
//   transports: [
    // new winston.transports.File({ filename: 'error.log', level: 'error' }),
    // new winston.transports.File({ filename: 'info.log', level: 'info' }),
    // new winston.transports.File({ filename: `logs/${currentday}.log`, level: 'info' }),
    // new winston.transports.File({ filename: 'combined.log' })
//   ]
// });

module.exports = logger;