console.log('starting notes.js');

var addNote = (title,body) =>{
    console.log("adding Notes:",title,body)
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
