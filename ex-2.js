//Exercise 2
let lightBulbStatus = "On";


function checkLightBulbStatus(lightBulbStatus){
    if (lightBulbStatus === "On"){
        return "On";
    }
    else if (lightBulbStatus === "Broken"){
        return "Light bulb is Broken.";
    }
    else{
        return "Off"
    }
};

lightBulbStatus ="Broken"

console.log(checkLightBulbStatus(lightBulbStatus))

