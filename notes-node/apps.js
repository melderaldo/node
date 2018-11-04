console.log('Starting app.js');


const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');


const notes = require('./notes.js');

var command = yargs.argv._[0];

if (command == 'add') {
    console.log('Add new note');
} else if (command == 'list ') {
    console.log('List notes')
} else if (command == 'delete') {
    console.log('Delete note')
} else if (command == 'read') {
    console.log('Read note');
} else {
    console.log('Command not reconized');
}