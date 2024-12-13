const today = new Date();

//day month year
const day = today.getDate();
const month = today.getMonth()+1;
const year = today.getFullYear();
const currentday = `${day}.${month}.${year}`;

module.exports = {
    currentday, 
    month,
    year
};