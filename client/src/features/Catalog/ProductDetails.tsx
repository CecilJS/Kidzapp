import { Button, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/product";

export default function ProductDetails (){
const {id} = useParams<{id: string}>();
const [product, setProduct] = useState<Product | null>(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
    axios.get(`http://localhost:5000/api/Products/${id}`)
    .then(response => setProduct(response.data))
    .catch(error => console.log(error))
    .finally(() => setLoading(false));
}, [id]);

if(loading) return <Typography>Loading...</Typography>;

if(!product) return <Typography>Product not found</Typography>;


    return (
 
       <Grid container spacing={6} sx={{marginTop: 15}} >
           <Grid item xs={12} sm={12} md={4} lg={6}>
                <img src={product.pictureUrl} alt={product.name} style={{width: '100%'}}/>
           </Grid>
           <Grid item xs={12} sm={12} md={6} lg={6}>
                <Typography variant="h3">{product.name}</Typography>
                <Divider sx={{mb: 2}}/>
                <Typography variant="h5" color='secondary'>£{product.price.toFixed(2)}</Typography>
                <Divider sx={{mb: 2}}/>
                
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{product.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Type</TableCell>
                                <TableCell>{product.type}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Brand</TableCell>
                                <TableCell>{product.brand}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Quantity In Stock</TableCell>
                                <TableCell>{product.quantityInStock}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button size="small" color="secondary" sx={{bgcolor: 'secondary', mb: 2, mt: 2}}>Back</Button>
                <Button size="small" color="secondary" sx={{bgcolor: 'secondary', mb: 2, mt: 2}}>Add to Cart</Button>
                
           </Grid>
       </Grid>
 
    )
}