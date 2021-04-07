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
            name: 'rowCount',
            message: 'What is the ending row for the vlookups?',
        },
        {
            type: 'input',
            name: 'retCol',
            message: 'Which column should be returned from the vlookup (number)?',
        },
    ])
    .then((data) => {

        var funcString;
        var ifErrorString;

        var rowCount = data.rowCount - data.startRow;
        
        for (var i = data.startRow; i < rowCount; i++){

            if (funcString == undefined){
                funcString = "VLOOKUP(" + data.sheet + "!$" + data.column + "$" + i + ",I:I," + data.retCol + ",0),";
                ifErrorString = "IFERROR(";
            } else {
                funcString = "VLOOKUP(" + data.sheet + "!$" + data.column + "$" + i + ",I:I," + data.retCol + ",0)," + funcString;
                ifErrorString = "IFERROR(" + ifErrorString;
            }



        }

        const fileName = data.fileName + ".txt";

        fs.writeFile(fileName,finFunc, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });