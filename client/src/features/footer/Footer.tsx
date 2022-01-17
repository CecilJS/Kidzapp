import { List, ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const footerLink = [
  
    { title: "terms", path: "/about" },
    { title: "privacy policy", path: "/contact" },
    { title: "Shop", path: "/catalog" }
  ]
  

export default function Footer (){

    return (
    <>
    <List sx={{ display: 'flex', mt: 15, pl: 50, alignItems: 'center', justifyContent: 'center'}} >
        {footerLink.map(({title, path}) => ( 
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
    <List>
        <ListItem sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <InstagramIcon sx={{ fontSize: 'inherit', color: 'inherit', mr: 5}} />
            <FacebookIcon sx={{ fontSize: 'inherit', color: 'inherit', mr: 5}} />
            <TwitterIcon sx={{ fontSize: 'inherit', color: 'inherit', mr: 5}} />
            <YouTubeIcon sx={{ fontSize: 'inherit', color: 'inherit', mr: 5}} />
        </ListItem>
    </List>
    </>
    )
}