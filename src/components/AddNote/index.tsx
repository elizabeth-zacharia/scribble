import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useRef, useEffect, FC, useState } from 'react';
import { Note } from '../../index.type';

type AddNoteProps = {
  saveNote: (note: Note) => void;
};
const AddNote: FC<AddNoteProps> = ({ saveNote }) => {
  const [showSavebutton, setShowSaveButton] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [description, setDescription] = useState('');

  const handleSave = () => {
    const newNote: Note = {
      description: description,
      createdAt: new Date(),
    };

    saveNote(newNote);
    setDescription('');
    setShowSaveButton(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowSaveButton(false);
      }
    };

    // Attach the handler to the document
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Remove the event listener on cleanup
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [containerRef]);

  return (
    <div ref={containerRef} className='w-3/6 mx-auto shadow-lg my-4 rounded'>
      <TextareaAutosize
        className='
                w-full p-2 rounded-lg
                border-none 
                resize-none outline-none
                text-base font-sans
                placeholder-gray-400 text-gray-700
            '
        aria-label='note'
        placeholder='Take a note...'
        minRows={3}
        onClick={() => setShowSaveButton(true)}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {showSavebutton ? (
        <Box className='flex justify-end'>
          <Button variant='contained' sx={{ margin: 1 }} onClick={handleSave}>
            Save
          </Button>{' '}
        </Box>
      ) : null}
    </div>
  );
};

export default AddNote;
