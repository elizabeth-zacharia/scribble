import { Note } from '../../index.type';
import { FC } from 'react';

type NoteListProps = {
  notes: Note[];
};

const NoteList: FC<NoteListProps> = ({ notes }) => {
  return (
    <div>
      {notes.map((note, index) => (
        <p key={index}>
          At {index}: {note.description}
        </p>
      ))}
    </div>
  );
};

export default NoteList;
