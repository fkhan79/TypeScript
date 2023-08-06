import inquirer from "inquirer";
import chalk from "chalk";

//create an input prompt
let num1 =await inquirer.prompt({
    name:"num1",
    type:"number",
    message:chalk.bgBlueBright("Enter First Number")
});
//Create a 2nd \input
let num2 =await inquirer.prompt({
    name:"num2",
    type:"number",
    message:chalk.bgBlueBright("Enter First Number")
});
//Create a selectable input options using a list of choices
let opr=await inquirer.prompt({
    name:"oprVal",
    type:"list",
    choices:["Add","Subtract","Multiply","Divide","Mod"],
    message:chalk.bgBlueBright("Select Operation")});


//Lets Do some maths
switch(opr.oprVal){
    case "Add":{
        console.log(chalk.bgGreenBright(chalk.red(`Your Answer is ${num1.num1+num2.num2}`)));
        break;
    }
    case "Subtract":{
        console.log(`Your Answer is ${num1.num1-num2.num2}`);
        break;
    }
    case "Multiply":{
        console.log(`Your Answer is ${num1.num1*num2.num2}`);
        break;
    }
    case "Divide":{
        console.log(`Your Answer is ${num1.num1/num2.num2}`);
        break;
    }
    case "Mod":{
        console.log(`Your Answer is ${num1.num1%num2.num2}`);
        break;
    }
}