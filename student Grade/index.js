// Write a program that prompts the user to input student marks. 
// The input should be between 0 and 100.
const prompt = require("prompt-sync")();
const marks = prompt("Please enter your marks:", "");//prompt the user to enter the marks

switch(true){ //it grow through the switch loop to check the marks and print the grade

    case marks >=79://for marks from 79 t0 100
        console.log("A");
        break;
    case marks >=60://fo mareks from 60 to 78
        console.log("B");
        break;
    case marks >=50://for marks from 50 to 59
        console.log("C");
        break;
    case marks >=40://for marks from 40 to 49
        console.log("D");
        break;
    default:
        console.log("E");//marks from 39 and below.
        break;

}

