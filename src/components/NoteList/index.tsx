import { Note } from '../../index.type';
import { FC } from 'react';
import NoteCard from '../NoteCard';
import Masonry from '@mui/lab/Masonry';

type NoteListProps = {
  notes: Note[];
};

const NoteList: FC<NoteListProps> = ({ notes }) => {
  return (
    <div>
      <Masonry columns={3} spacing={2}>
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </Masonry>
    </div>
  );
};

export default NoteList;
