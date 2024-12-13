const calendar = new Date();

const day = calendar.getDate();
const month = calendar.getMonth()+1;
const year = calendar.getFullYear();

//2022-01-13 
const datetime = `${year}-${month}-${day}`;

module.exports = datetime