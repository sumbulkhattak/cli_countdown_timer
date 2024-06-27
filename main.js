import inquirer from 'inquirer';
import chalk from "chalk";
function startCountdown(duration) {
    let remainingSeconds = duration;
    const intervalId = setInterval(() => {
        remainingSeconds--;
        if (remainingSeconds <= 0) {
            clearInterval(intervalId);
            console.log(chalk.italic.bold.red("\t\t\t\tTime's up!"));
        }
        else {
            console.log(chalk.italic.blueBright(`Time remaining: ${remainingSeconds} seconds`));
        }
    }, 1000);
}
async function main() {
    const { duration } = await inquirer.prompt([
        {
            type: "number",
            name: "duration",
            message: chalk.bold.green("Enter the duration of the countdown in seconds:"),
            validate: (input) => {
                return input > 0 ? true : chalk.bold.yellow("Please enter a valid duration (greater than 0).");
            }
        }
    ]);
    startCountdown(duration);
}
main();
