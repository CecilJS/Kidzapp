import { Divider, Grid, Table,  TableBody,  TableCell,  TableContainer,  TableRow,  Typography } from "@mui/material";
import background from "../images/teach.jpg";
import { Link } from "react-router-dom";
import { LoadingButton } from "@mui/lab";

export default function Home (){

    // I appreciate this code defies the rules of clean code in that I am repeating the same code in multiple places. 
    // I plan to refactor this code to be more reusable. 
    return (

    <>
      <Grid container spacing={6} sx={{marginTop: 15}} >
           <Grid item xs={12} sm={12} md={4} lg={6}>
                <img src={background} alt="background" style={{width: '100%'}}/>
           </Grid>
           <Grid item xs={12} sm={12} md={6} lg={6}>
                <Typography variant="h6">STEM</Typography>
                
                <Typography variant="h3" color='secondary'>Welcome to Kidz App</Typography>
                <Divider sx={{mb: 2}}/>
                
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                <Typography variant="subtitle1">
                                    Did you know that your child is naturally creative? 
                                    Through play, children learn vital skills and this can
                                    be harnessed at a young age to develop their creative 
                                    thinking in order to set them up for success. Although 
                                    inherently creative, children will not hone these skills on their own.
                                    They need guidance. We can help! Check out our shop for books, 
                                    coding games, and many more things that can help your child 
                                    develop into a successful computer programmer.
                                 </Typography>
                                </TableCell>
                               
                            </TableRow>
                            
                        </TableBody>
                    </Table>
                </TableContainer>
            <LoadingButton size="large" color="secondary" variant='contained' fullWidth sx={{bgcolor: 'secondary', mb: 2, mt: 2, height: '55px'}} component={Link} to={'/catalog'}>Shop Now</LoadingButton>    
         </Grid>   
       </Grid>
       <Divider sx={{mt: 15}}/>
    </>
    )
}