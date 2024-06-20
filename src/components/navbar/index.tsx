import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@mui/material';

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
};

export default Navbar;
