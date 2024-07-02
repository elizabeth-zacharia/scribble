import { Note } from '../../index.type';
import { FC } from 'react';
import { Box } from '@mui/material';
import NoteCard from '../NoteCard';

type NoteListProps = {
  notes: Note[];
};

const NoteList: FC<NoteListProps> = ({ notes }) => {
  return (
    <div>
      <Box display='flex' flexWrap='wrap' gap={2}>
        {notes.map((note, index) => (
          <NoteCard note={note} />
        ))}
      </Box>
    </div>
  );
};

export default NoteList;
