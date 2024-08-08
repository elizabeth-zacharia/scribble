import { Card, CardContent, Typography } from '@mui/material';
import { Note } from '../../index.type';
import { FC } from 'react';

type NoteCardProps = {
  note: Note;
};

const NoteCard: FC<NoteCardProps> = ({ note }) => {
  return (
    <Card variant='outlined' sx={{ width: '100%', height: 'auto', padding: 2 }}>
      <CardContent>
        <Typography
          variant='body2'
          component='div'
          style={{ whiteSpace: 'pre-line' }}
        >
          {note.description}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default NoteCard;
