// Write a program that takes as input the speed of a car e.g 80. 
// If the speed is less than 70, it should print “Ok”.
//  Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.
const prompt = require("prompt-sync")();

function speedDetector(speed=prompt("Enter the speed:")){ //prompt the user to enter the speed
    if (speed <= 70){//checks the speed
        console.log("OK");

    }else if (((speed-70)/5)<12){//calculates the points of the speed if iits more than 70 and return if its less than 12 points
        console.log(("Points:"+(speed-70)/5));

    }else{
        console.log("License suspended"); //if the points are more than 12 its print thid.
    }
    
}
speedDetector()//it calls the function


