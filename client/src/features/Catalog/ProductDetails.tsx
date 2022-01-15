import { LoadingButton } from "@mui/lab";
import { Button, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NotFound from "../../app/api/errors/NotFound";
import LoadingComponent from "../../app/layout/LoadingComponents";
import { useAppDispatch, useAppSelector } from "../../app/store/ConfigStore";
import { addBasketItem, removeBasketItem } from "../basket/basketSlice";
import {  fetchProduct, productsSelector } from "./catalogSlice";

export default function ProductDetails (){
const {basket, status} = useAppSelector(state => state.basket);   
const dispatch = useAppDispatch(); 
const {id} = useParams<{id: string}>();
const product  = useAppSelector(state => productsSelector.selectById(state,id));
const {status: productStatus} = useAppSelector(state => state.catalog);
const [quantity, setQuantity] = useState(0);
const item = basket?.items.find(i => i.productId === product?.id);

useEffect(() => {
    if(item) setQuantity(item.quantity);
    if(!product) dispatch(fetchProduct(parseInt(id)));
}, [dispatch, id, item, product]);

function handleInputChange(event: any){
    if(event.target.value >= 0) {// prevent negative values
    setQuantity(parseInt(event.target.value)); // parseInt is used to convert string to number
}
}

/*
Check whether the product is already in the basket
Check whether the quantity is greater than the quantity in stock
Check whether the quantity is greater than 0
Check whether the quantity is less than the quantity in stock
Check whether a new item is being added to the basket

*/
function handleUpdateCart(){
if(!item || quantity > item.quantity) {
   const updatedQuantity = item ? quantity - item.quantity : quantity; 
    dispatch(addBasketItem({productId: product?.id!, quantity: updatedQuantity}));
    
    }
    else {
        const updatedQuantity = item.quantity - quantity; 
        dispatch(removeBasketItem({productId: product?.id!, quantity: updatedQuantity}));
    }
}

if(productStatus.includes('pending')) return <LoadingComponent message="Loading.."/>;

if(!product) return <NotFound/>;


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
                
                <Grid container spacing={2} sx={{ mt: 4}}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                        onChange={handleInputChange}
                         variant="outlined"
                         label="Quantity in cart"
                         type="number"
                         fullWidth
                         value={quantity}
                        />

                     
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <LoadingButton
                    disabled={item?.quantity === quantity }
                    loading={status.includes('pending')}
                    onClick={handleUpdateCart}
                    sx={{height: '55px'}}
                    color='secondary'
                    size='large'
                    variant='contained'
                    fullWidth
                    >
                    {item ? 'Update Cart' : 'Add to Cart'}
                    </LoadingButton>
                </Grid>
            </Grid>
            <Button size="small" color="secondary" sx={{bgcolor: 'secondary', mb: 2, mt: 2}} component={Link} to={'/catalog'}>Back</Button>
         </Grid>
         
       </Grid>
 
    )
}