import { AppBar, Badge, Box, FormControlLabel, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";
import { useState } from "react";
import { useStoreContext } from "../context/StoreContext";
import MaterialUISwitch from "../../features/mode/MaterialUISwitch";




interface Props {
  darkMode: boolean;
  handleThemeChange:  () => void;
}

// links to map into the navbar for routing purposes
const primaryLink = [
  { title: "Shop", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
]

const secondaryLink = [
  { title: "login", path: "/login" },
  { title: "signup", path: "/signup" }
 
]


export default function Header({darkMode, handleThemeChange}: Props) {
  const {basket} = useStoreContext();
  const itemCount = basket?.items.reduce((count, item) => count + item.quantity, 0);
  
  // changing the text from dark to light and vice versa
 const [modeLabel, setmodeLabel] = useState(true);
 const labelState = modeLabel ? {mode: 'Light Mode'} : {mode: 'Dark Mode'};
  function handleChange(){
    setmodeLabel(!modeLabel);

  }
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
        <Typography variant="h6" sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }} component= {NavLink} to = '/'>Kidz App</Typography>
        <List sx={{ display: 'flex'}} >

          {primaryLink.map(({title, path}) => ( 

              <ListItem 
              component= {NavLink} 
              to = {path}
              key={path}
              sx={{ color: "inherit", typography: "h7" }}
              >
                {title.charAt(0).toUpperCase() + title.slice(1)}
              </ListItem>
          ))}
        </List>
        
        <List sx={{display: 'flex'}} >

        {secondaryLink.map(({title, path}) => ( 

            <ListItem 
            component= {NavLink} 
            to = {path}
            key={path}
            sx={{ color: "inherit", typography: "h7" }}
            >
              {title.charAt(0).toUpperCase() + title.slice(1)}
            </ListItem>
        ))}
        </List>
        <IconButton component={Link} to='/basket' size="large" sx={{color: 'inherit'}}>
          <Badge badgeContent={itemCount} color='secondary'>
            <ShoppingCart/>
          </Badge>
        </IconButton>
        <FormControlLabel
            control={<MaterialUISwitch sx={{ m: 1 }} checked={darkMode}  onChange={handleThemeChange}/>}
            label={labelState.mode}
            onClick={handleChange}
           />
      </Toolbar>
     
    </AppBar>
    </Box>
  );
}   

/*
Understanding the arr.reduce() method
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

*/