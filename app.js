const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2); // holds the usre command-line arguments

// extract commamd-line arguments and store them into distinct variables
const [name, github] = profileDataArgs;

// console.log(profileDataArgs);




fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw Error(err);

    console.log('Portfolio complete! Check out index.html to see the output!');
});