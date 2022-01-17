import { Divider, Grid, Table,  TableBody,  TableCell,  TableContainer,  TableRow,  Typography } from "@mui/material";
import background from "../images/mum-teaching.jpg";
import background1 from "../images/coding.jpg";
import background2 from "../images/vision.jpg";


export default function Home (){

    return (
     <>
      <Typography variant="h3" color='secondary' sx={{marginTop: 15}}>Kidz App - Developing Creativity</Typography>
      <Grid container spacing={6} sx={{marginTop: 5}} >
     
           <Grid item xs={12} sm={12} md={4} lg={4}>
                <img src={background} alt="background" style={{width: '100%'}}/>
           </Grid>
           <Grid item xs={12} sm={12} md={6} lg={8}>
                <Typography variant="h5" color='secondary'>About us</Typography>
                <Divider sx={{mb: 2}}/>
                
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                <Typography variant="subtitle1">
                                Kidz App was established in 2019 during the height of the global Covid-19 pandemic. 
                                Our primary goal is to help parents who want their children to learn important coding 
                                skills which will set them up for success at an early age in this ever changing digital world. 
                                Learning how to code has never been as important as it is now in the 21st century. 
                                By producing educational products and apps that help teach children through play,
                                 we seek to help parents reach the educational goals they have set for their children. 
                                 We are on a mission, and we are happy to have you on board!
                                 </Typography> 
                                </TableCell>
                               
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            
       </Grid>
       <Divider sx={{mt: 15}}/>
    </Grid>
    <Grid container spacing={6} sx={{marginTop: 15}} >
    <Grid item xs={12} sm={12} md={4} lg={4}>
         <img src={background1} alt="background" style={{width: '100%'}}/>
    </Grid>
    <Grid item xs={12} sm={12} md={6} lg={8}>
         <Typography variant="h5" color='secondary'>Our Mission</Typography>
         <Divider sx={{mb: 2}}/>
         
         <TableContainer>
             <Table>
                 <TableBody>
                     <TableRow>
                         <TableCell>
                         <Typography variant="subtitle1">
                         In recent years, the world has seen a steep rise in the use of technology. 
                         It is practically unthinkable to imagine anyone on earth today who does not 
                         interact with technology in one way or the other. It has therefore been said
                          that in the not so distant future, being technologically inclined will be an 
                          essential requirement for success at the workplace and in life. Parents who are 
                          concerned about their children's future are no doubt looking for ways to give their 
                          children a good head start, and that is where we come into the picture. 
                          Our mission is to make the lives of parents easy by bring the right tools to 
                          them at the right time as they strive to meet the educational needs of their children.
                          We love technology and we are on the mission to make it accessible to everyone, especially children.
                          </Typography>
                         </TableCell>
                        
                     </TableRow>
                 </TableBody>
             </Table>
         </TableContainer>
     
</Grid>
<Divider sx={{mt: 15}}/>
</Grid>
<Grid container spacing={6} sx={{marginTop: 15}} >
           <Grid item xs={12} sm={12} md={4} lg={4}>
                <img src={background2} alt="background" style={{width: '100%'}}/>
           </Grid>
           <Grid item xs={12} sm={12} md={6} lg={8}>
                <Typography variant="h5" color='secondary'>Our Vision</Typography>
                <Divider sx={{mb: 2}}/>
                
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                <Typography variant="subtitle1">
                                We are committed and dedicated to improving the lives of parents who shoulder the weighty responsibility of raising
                                 their children during this ever changing world. As a result, Kidz App is branching into Artificial Intelligence (AI) 
                                 and exploring new games that can introduce these complex concepts in a simple fun way for children to understand. 
                                 Our vision for the future is to introduce children to self-driving cars by breaking down computer vision concept through 
                                 a very fun game called Drive. We will also be introducing educational materials in our games and apps to help children 
                                 learn healthy eating habits as they play these games. We believe doing this will help us accomplish our eternal mission 
                                 of making the lives of parents easy and making technology accessible to everyone, especially children.

                                    </Typography>
                                </TableCell>
                               
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            
       </Grid>
       <Divider sx={{mt: 15}}/>
    </Grid>
</>
    )
}