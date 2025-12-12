//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";
let message;
lightBulbStatus == "On" 
?  message ="On" 
: lightBulbStatus == "Off" 
? message = "Off" 
: message = "Please choose the correct input (On/Off)";

console.log(message);