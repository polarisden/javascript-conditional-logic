//Exercise 4
// Switch Statement
let lightBulbStatus = "On";
let message;

switch (lightBulbStatus){
    case "On":
        message = "On";
        break;
    case "Off":
        message = "Off";
        break;
    default:
        message = "Please choose the correct input (On/Off)";
        break;
}

console.log(message);