import './App.css';
import AddNote from './components/AddNote';
import { Note } from './index.type';
import { useState } from 'react';

import Navbar from './components/navbar';
import NoteList from './components/NoteList';
function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const saveNote = (note: Note) => {
    const updatedNotes = [...notes, note];
    setNotes(updatedNotes);
  };
  return (
    <>
      <Navbar />
      <AddNote saveNote={saveNote} />
      <NoteList notes={notes} />
    </>
  );
}
export default App;
