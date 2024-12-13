// const winston = require('winston');
// const d = new Date();

// //day month year
// const day = d.getDate();
// const month = d.getMonth()+1;
// const year = d.getFullYear();
// const currentday = `${day}.${month}.${year}`;

// console.log(currentday);



// const logger = winston.createLogger({
//   level: 'info',
//   format: winston.format.json(),
//   transports: [
//     // new winston.transports.File({ filename: 'error.log', level: 'error' }),
//     // new winston.transports.File({ filename: 'info.log', level: 'info' }),
//     new winston.transports.File({ filename: `logs/${currentday}.log`, level: 'debug' }),
//     // new winston.transports.File({ filename: 'combined.log' })
//   ]
// });

// if (process.env.NODE_ENV !== 'production') {
//   logger.add(new winston.transports.Console({
//     format: winston.format.simple()
//   }));
// }

// logger.error('error select*from user where id_user=?');

// logger.info('Select*from user');
// logger.error('message error');
// logger.debug('message debug');