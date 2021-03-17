let username = "JackOfAllTrades";
//^ is the start
//[a-z] first character is a letter
//[a-z]+ following characters are letters
//\d*$ input ends with 0 or more digits
// ^[a-z] first character is a letter
//\d\d+ following characters are 2 or more
//$ end of input
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
console.log(result)