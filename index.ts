#!/usr/bin/env node
import inquirer from "inquirer";

type userGuessNumber = {
  guess_number: number;
};
let reTry: { again: string };

const startGame = async () => {
  const randomNumber = Math.floor(Math.random() * 10);

  const user_guess_number: userGuessNumber = await inquirer.prompt([
    {
      type: "input",
      name: "guess_number",
      message: "Enter your guess number bewteen 1 to 10",
      validate: (input) => {
        if (isNaN(input) || input <= 0) {
          return "Invalid number";
        }
        if (input === "") {
          return "Value is required!";
        }

        return true;
      },
    },
  ]);

  if (user_guess_number.guess_number === randomNumber) {
    console.log("\n=> Yuhoo! your answer is correct!\n");
  } else {
    console.log("\nSorry! your answer is incorrect!\n");
  }
};

do {
  await startGame();
  reTry = await inquirer.prompt([
    {
      type: "list",
      name: "again",
      choices: ["Yes", "No"],
      message: "Do you want to reTry your luck?",
    },
  ]);
} while (reTry.again === "Yes");
