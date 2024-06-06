#! /usr/bin/env node
import inquirer from "inquirer";
let todos = ["Orange", "Mango", "Kiwi", "Pineapple"];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "What would you like to add in your todos?"
        },
        {
            name: "secondQuestion",
            type: "confirm",
            default: "true",
            message: "Would you like to add more in your todos?"
        }
    ]);
    todos.push(addTask.firstQuestion);
    console.log(todos);
    condition = addTask.secondQuestion;
    todos.pop();
    console.log(todos);
    todos.forEach(elem => console.log(elem));
}
