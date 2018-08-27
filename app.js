console.log('starting app.js');

const fs = require('fs');
const _ =require('lodash');
const yargs=require('yargs');

const notes= require('./notes.js');

var args=yargs.argv;

var command = args._[0];



console.log('yargs',args);


if(command=='add')
{
    var note=notes.addNote(args.title,args.body);

    if(note)
    {
        console.log("Notes added successfuly with title:",note.title," and body:",note.body);
       
    }
    else{
        console.log("Notes title is already in use");
    }
}
else if(command=='read')
{
    notes.getNote(args.title);
}
else if(command=='remove')
{
    notes.removeNote(args.title);
}
else if(command=='list')
{
    notes.getAll();
}
else{
    console.log('command not found');
}




