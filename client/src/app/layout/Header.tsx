import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar sx={{ bgcolor: "#421C52"}}>
      <Toolbar>
         <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
            <MenuIcon />
          </IconButton>
        <Typography variant="h6">Kidz App</Typography>
      </Toolbar>
    </AppBar>
    </Box>
  );
}   