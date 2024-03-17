import { useState } from 'react';
import axios from 'axios';

function NoteSection() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [updatedNote, setUpdatedNote] = useState('');

  const addNote = () => {
    if (newNote.trim() !== '') {
      // Update state
      setNotes([...notes, { id: Date.now(), content: newNote }]);
      setNewNote('');

      // Send API request
      axios.post('http://localhost:8000/api/v1/students/notes', { content: newNote })
        .then(response => {
          console.log('Note added:', response.data);
        })
        .catch(error => {
          console.error('Error adding note:', error);
        });
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const startEditing = (id) => {
    setEditingNoteId(id);
    const noteToEdit = notes.find(note => note.id === id);
    setUpdatedNote(noteToEdit.content);
  };

  const updateNote = () => {
    const updatedNotes = notes.map(note => {
      if (note.id === editingNoteId) {
        return { ...note, content: updatedNote };
      }
      return note;
    });
    setNotes(updatedNotes);
    setEditingNoteId(null);
    setUpdatedNote('');
  };

  return (
    <div className="container mx-auto mt-10 px-4 lg:px-0">
      <h2 className="text-3xl font-bold mb-6">Note Section</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Add New Note</h3>
            <input
              type="text"
              placeholder="Enter new note"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none"
            />
            <button
              onClick={addNote}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none"
            >
              Add Note
            </button>
          </div>
        </div>
        <div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Your Notes</h3>
            <ul>
              {notes.map(note => (
                <li key={note.id} className="mb-4">
                  {editingNoteId === note.id ? (
                    <div>
                      <input
                        type="text"
                        value={updatedNote}
                        onChange={(e) => setUpdatedNote(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none"
                      />
                      <button
                        onClick={updateNote}
                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
                      >
                        Update
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <span>{note.content}</span>
                      <div>
                        <button
                          onClick={() => startEditing(note.id)}
                          className="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600 focus:outline-none"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteNote(note.id)}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 focus:outline-none"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteSection;
