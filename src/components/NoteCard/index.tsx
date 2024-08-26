import { Card, CardContent, Box } from '@mui/material';
import { Note } from '../../index.type';
import { FC } from 'react';

type NoteCardProps = {
  note: Note;
};

const NoteCard: FC<NoteCardProps> = ({ note }) => {
  return (
    <Card variant='outlined' sx={{ width: '100%', height: 'auto', padding: 2 }}>
      <CardContent>
        <Box
          component='div'
          sx={{
            whiteSpace: 'pre-line',
            '& table': {
              width: '100%',
              borderCollapse: 'collapse',
              marginTop: 2,
            },
            '& th, & td': {
              border: '1px solid #ccc',
              padding: '8px',
              textAlign: 'left',
            },
            '& th': {
              backgroundColor: '#f2f2f2',
            },
          }}
          dangerouslySetInnerHTML={{ __html: note.description }}
        />
      </CardContent>
    </Card>
  );
};

export default NoteCard;
