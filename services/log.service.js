import chalk from 'chalk';

export const printError = (error) => {
  console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

export const printSuccess = (message) => {
  console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

export const printHelp = () => {
  console.log(
    chalk.bgCyan('HELP' + '\n' + 'без пораметров - вывод погоды'
    + '\n' + '-h - помощь'
    + '\n' + '-s - город'
    + '\n' + '-t API KEY'
    ));
};
