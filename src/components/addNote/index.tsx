import { Box } from '@mui/material';

const AddNote = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <textarea
        style={{
          width: '100%',

          padding: '10px',
          fontSize: '16px',
          fontWeight: 'bold', // Bold text
          fontStyle: 'italic', // Italic text
          border: '1px solid #ccc',
          borderRadius: '4px',
          marginTop: '10px',
        }}
        rows={1}
        placeholder='Add a to do...'
      ></textarea>
    </Box>
  );
};

export default AddNote;
