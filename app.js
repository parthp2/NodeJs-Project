const fs = require('fs');
const _ =require('lodash');
const yargs=require('yargs');

const notes= require('./notes.js');

var args=yargs.argv;

var command = args._[0];


if(command=='add')
{
    var note=notes.addNote(args.title,args.body);

    if(note)
    {
        console.log("---Note Added---");
        notes.logNote(note);
    }
    else{
        console.log("Notes title is already in use");
    }
}
else if(command=='read')
{
   var note= notes.getNote(args.title);

   if(note)
   {
       console.log("---Note Found---");
       notes.logNote(note);
   }
   else{
       console.log('Note not found');
   }
}
else if(command=='remove')
{
    var result=notes.removeNote(args.title);

    var message= result ? 'Note removed successfully': 'Note not removed';

    console.log(message);
}
else if(command=='list')
{
   var allNotes= notes.getAll();
    console.log(`Printing ${allNotes.length} node(s)`);

    allNotes.forEach((note) => notes.logNote(note));
}
else{
    console.log('command not found');
}




