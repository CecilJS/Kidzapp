import { Add, Delete, Remove } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Button, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import BasketSummary from './BasketSummary';
import { currencyFormat } from "../../app/util/util";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../app/store/ConfigStore';
import {addBasketItem, removeBasketItem} from './basketSlice';

function BasketPage() {
    const {basket, status} = useAppSelector(state => state.basket);
    const dispatch = useAppDispatch();
   



if(!basket) return <Typography variant='h3' sx={{marginTop: 15}}>Your basket is empty</Typography>
  return (
      <>
      <TableContainer component={Paper} sx={{marginTop: 15}}>
      <Typography variant='h3'>Basket</Typography>
      <Divider/>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="right">Subtotal</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {basket.items.map(item => (
                <TableRow
                  key={item.productId}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Box display='flex' alignItems="center">
                      <img src={item.pictureUrl} alt={item.name} width={50} style={{marginRight: 20, height: 50 }}/>
                      <span>{item.name}</span>
                    </Box>
                  </TableCell>
                  <TableCell align="center">{currencyFormat(item.price)}</TableCell>
                  <TableCell align="center">
                    <LoadingButton 
                        loading={status === 'pendingRemoveItem' + item.productId + 'rem'}
                        onClick={() => dispatch(removeBasketItem({productId: item.productId, quantity: 1, name: 'rem'}))}
                        color='error'
                    >
                      <Remove />
                    </LoadingButton >
                    {item.quantity}
                     <LoadingButton 
                      loading={status === 'pendingAddItem' + item.productId}
                      onClick={() => dispatch(addBasketItem({productId: item.productId}))}
                      color='secondary'
                     >
                      <Add />
                    </LoadingButton>
                    </TableCell>
                  <TableCell align="right">£ {(item.price * item.quantity).toFixed(2)}</TableCell>
                  <TableCell align="right">
                    <LoadingButton 
                    loading={status === 'pendingRemoveItem'+ item.productId + 'del' }
                    onClick={() => dispatch(removeBasketItem({productId: item.productId, quantity: item.quantity, name: 'del'}))}
                    color='error'
                    >
                        <Delete />
                    </LoadingButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid container>
          <Grid item xs={6}/>
            <Grid item xs={6}>
                <BasketSummary/>
                <Button 
                component={Link}
                to='/checkout'
                variant='contained'
                size='large'
                fullWidth
                color='secondary'
                >
                  Checkout
                </Button>
            </Grid>
        </Grid>
      
      </>
    

  )
}

export default BasketPage;