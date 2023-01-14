const {
  addNoteHandler,
  getAllNotehandler,
  getNoteByIdHandler,
  editNoteByIdhandler,
  deleteNoteByIdhandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotehandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdhandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdhandler,
  },
];

module.exports = routes;
