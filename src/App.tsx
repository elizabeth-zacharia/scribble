import './App.css';
import AddNote from './components/addNote';
import { Note } from './index.type';
import { useState } from 'react';

import Navbar from './components/navbar';
function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const saveNote = (Note: Note) => {
    console.log('this is the latest note added', Note);
    const updatedNotes = [...notes, Note];
    setNotes(updatedNotes);
  };
  return (
    <>
      <Navbar />
      <AddNote saveNote={saveNote} />
    </>
  );
}
export default App;
