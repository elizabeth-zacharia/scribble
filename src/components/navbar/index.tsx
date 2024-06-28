import { Box, AppBar, Toolbar, Typography } from '@mui/material';

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
