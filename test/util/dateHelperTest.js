const {
    convertToDateTime,
    convertToISOString,
} = require("./../../util/dateHelper.js");

const timestamp = Date.now();
const date = new Date();

console.log(timestamp);
console.log(convertToDateTime(timestamp));
console.log(convertToISOString(timestamp));
console.log(new Date(timestamp).getTime());
console.log(new Date(timestamp).toISOString());
