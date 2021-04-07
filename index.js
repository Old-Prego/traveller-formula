const inquirer = require('inquirer');
const fs = require('fs');
const { ifError } = require('assert');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'fileName',
            message: 'What would you like the output file named?',
        },
        {
            type: 'input',
            name: 'sheet',
            message: 'What sheet should the vlookup reference?',
        },
        {
            type: 'input',
            name: 'column',
            message: 'What column should the vlookup reference?',
        },
        {
            type: 'input',
            name: 'startRow',
            message: 'What row should the vlookup start at?',
        },
        {
            type: 'input',
            name: 'endRow',
            message: 'What is the ending row for the vlookups?',
        },
        {
            type: 'input',
            name: 'retCol',
            message: 'Which column should be returned from the vlookup (number)?',
        },
    ])
    .then((data) => {

        var formString;
        var ifErrorString;
        var i = parseInt(data.startRow,10);
        var j = parseInt(data.endRow,10);
        console.log(typeof(i));
        console.log(typeof(j));

        for (i; i <= j; i++){

            console.log(i);

            if (formString == undefined){
                formString = "VLOOKUP(" + data.sheet + "!$" + data.column + "$" + i + ",I:I," + data.retCol + ",0),";
            } else {
                formString = formString + "VLOOKUP(" + data.sheet + "!$" + data.column + "$" + i + ",I:I," + data.retCol + ",0)),";
            };
            ifErrorString = "IFERROR(" + ifErrorString;
        }

        const fileName = data.fileName + ".txt";
        const finForm = "=" + ifErrorString + formString + `"NONE")`;

        fs.writeFile(fileName,finForm, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });