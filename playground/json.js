// var obj = {
//     name:'parth',
//     age:24
// }

// var objString = JSON.stringify(obj);

// console.log(typeof objString);
// console.log(objString);

// var personString = '{"name":"ram","age":"25"}';

// var person= JSON.parse(personString);

// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var OriginalObj = {
    title:'some title',
    body:'some body'
}

var OriginalObjString = JSON.stringify(OriginalObj);

fs.writeFileSync('notes.json',OriginalObjString);

var noteString = fs.readFileSync('notes.json');

var note= JSON.parse(noteString);

console.log(typeof note);
console.log(note);