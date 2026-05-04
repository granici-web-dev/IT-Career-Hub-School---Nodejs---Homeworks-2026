import moment from "moment";

const currentDate = moment().format('DD-MM-YYYY');
const currentDate2 = moment().format('MMM Do YY');
const currentDate3 = moment().format('dddd');

console.log(currentDate);
console.log(currentDate2);
console.log(currentDate3);