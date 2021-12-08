const { prompt } = require('enquirer');
const calculatrice = require('./calco');

prompt([
    {
        type: 'input',
        name: 'a',
        message: 'A : ',
    },
    {
        type: 'input',
        name: 'b',
        message: 'B : '
    },
    {
        type: 'select',
        name: 'operation',
        message: 'operation : ',
        choices: ["+", "-", "x", "/"],
    }
])
    .then(({ a, b, operation }) => {
        console.log(a, operation, b, "=", calculatrice(a, b, operation));
    })
    .catch(err => { console.log(err.message); })
