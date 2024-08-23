import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { useRef, useEffect, FC, useState } from 'react';
import { Note } from '../../index.type';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

type AddNoteProps = {
  saveNote: (note: Note) => void;
};

const AddNote: FC<AddNoteProps> = ({ saveNote }) => {
  const [showSaveButton, setShowSaveButton] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [description, setDescription] = useState('');

  const handleSave = () => {
    const newNote: Note = {
      id: Date.now().toString(), 
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

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [containerRef]);

  return (
    <div ref={containerRef} className='w-3/6 mx-auto shadow-lg my-4 rounded'>
      <CKEditor
        editor={ClassicEditor}
        data={description}
        onChange={(event, editor) => {
          const data = editor.getData();
          setDescription(data);
        }}
        onFocus={() => setShowSaveButton(true)}
      />
      {showSaveButton ? (
        <Box className='flex justify-end'>
          <Button variant='contained' sx={{ margin: 1 }} onClick={handleSave}>
            Save
          </Button>
        </Box>
      ) : null}
    </div>
  );
};

export default AddNote;
