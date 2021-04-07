const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
    ])
    .then((data) => {
        const filename = `${data.name.toLowerCase().split(' ').join('')}.html`;
        console.log(data);

        fs.writeFile(filename,htmlData, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });