console.log('starting notes.js');

const fs= require('fs');

var fetchNotes = () =>{
    
    try{
        var noteStrings= fs.readFileSync('node-data.json');
        return JSON.parse(noteStrings);
    }
    catch(e)
    {
        return [];
    }
}

var saveNotes =(notes) =>{

    fs.writeFileSync('node-data.json',JSON.stringify(notes));
}

var addNote = (title,body) =>{
    
    var notes=fetchNotes();

    var note={
        title,
        body
    }
    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length===0)
    {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
    
}

var getAll = () =>{

    console.log("getting all notes");
}

var getNote = (title) =>{
    console.log("getting Note",title);
}

var removeNote = (title) =>{
    //fecth notes
    var notes=fetchNotes();
    //filter notes,removing the one with title of argument
    var newNotes= notes.filter((note)=> note.title!==title)
    //save new notes array
    saveNotes(newNotes);

    return notes.length!==newNotes.length;
}

module.exports= {
    addNote:addNote,
    getAll,
    getNote,
    removeNote
}
