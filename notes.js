console.log('starting notes.js');

const fs= require('fs');

var addNote = (title,body) =>{
    
    var notes=[];

    var note={
        title,
        body
    }

    try{
        var noteStrings= fs.readFileSync('node-data.json');
        notes=JSON.parse(noteStrings);
    }
    catch(e)
    {

    }

    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length===0)
    {
        notes.push(note);
        fs.writeFileSync('node-data.json',JSON.stringify(notes));
    }
    
}

var getAll = () =>{

    console.log("getting all notes");
}

var getNote = (title) =>{
    console.log("getting Note",title);
}

var removeNote = (title) =>{
    console.log("remove notes",title);
}

module.exports= {
    addNote:addNote,
    getAll,
    getNote,
    removeNote
}
