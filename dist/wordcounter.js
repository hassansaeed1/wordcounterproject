#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
async function wellcome() {
    let tittle = chalkAnimation.pulse("Develp by Hassan Sheikh \n let start counter ");
    await new Promise((resolve) => {
        setTimeout(resolve, 1500);
    });
    tittle.stop();
}
await wellcome();
async function wordCounter() {
    const answers = await inquirer.prompt([
        {
            name: "sentence",
            type: "input",
            message: "Enter your sentence to count your word: ",
        },
    ]);
    const word = answers.sentence.trim().split(" ");
    console.log(`Your sentence word count is ${word.length}`);
}
async function startAgain() {
    do {
        await wordCounter();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to try again? Press(y/n)",
        });
    } while (again.restart === "y" ||
        again.restart === "Y" ||
        again.restart === "yes" ||
        again.restart === "YES");
}
await startAgain();
