
const t = new Date();

//real time
const hour = t.getHours();
const min = t.getMinutes();
const sec = t.getSeconds();
const time = `${hour}:${min}:${sec}`;

module.exports = time;