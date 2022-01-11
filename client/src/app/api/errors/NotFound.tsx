import { Typography, Divider, Button, Container, Paper } from "@mui/material";
import { Link } from "react-router-dom";


function NotFound() {
    return (
            <Container component={Paper} sx={{height: 400}}>
            <Typography sx={{ marginTop: 15 }} variant='h3' color='error' gutterBottom>Sorry, Looks like you're lost.</Typography>
            <Divider />
            <Button component={Link} to='/'>Back To Home</Button>
            </Container>
    )
}

export default NotFound;