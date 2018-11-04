console.log('Start notes')

var addNote = (title, body) => {
    console.log('Add note', title);
}

var deleteNote = (title) => {
    console.log('Remove note', title)
}

var getAll = () => {
    console.log('List all notes');
}


var getNote = (title) => {
    console.log('List note', title);
}

module.exports = {
    addNote,
    deleteNote,
    getAll,
    getNote
}