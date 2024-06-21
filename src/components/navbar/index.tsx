import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  TextField,
} from '@mui/material';
import AddNote from '../addNote';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color='transparent'>
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}
            color='black'
            style={{ fontWeight: 'bold', fontStyle: 'italic' }}
          >
            Scribble
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
  return <AddNote />;
};

export default Navbar;
