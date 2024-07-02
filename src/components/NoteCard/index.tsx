import { Card } from '@mui/material';
import { Note } from '../../index.type';
import { FC } from 'react';

type NoteCardProps = {
  note: Note;
};

const NoteCard: FC<NoteCardProps> = ({ note }) => {
  return (
    <Card variant='outlined' sx={{ width: 200, height: 'auto', padding: 2 }}>
      <div style={{ whiteSpace: 'pre-line' }}>{note.description}</div>
    </Card>
  );
};
export default NoteCard;
