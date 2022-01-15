import { LoadingButton } from "@mui/lab";
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/product";
import { useAppDispatch, useAppSelector } from "../../app/store/ConfigStore";
import { currencyFormat } from "../../app/util/util";
import { addBasketItem } from "../basket/basketSlice";

interface Props {
    product: Product;
}

export default function ProductCard({ product}: Props) {
const {status} = useAppSelector(state => state.basket);
const dispatch = useAppDispatch();



  return (
    <div>
      <Card>
        <CardHeader
         avatar={
            <Avatar sx={{ bgcolor: "#421C52"}}>
              {product.name.charAt(0).toUpperCase()}
            </Avatar>
         }
          titleTypographyProps= {{
            sx: {fontWeight: "bold"}
          
          }}
          title={product.name}
        />
    
              <CardMedia
                component="img"
                sx={{ height: '140', bgcolor: '#421C52', backgroundSize: 'contain'}}
                image={product.pictureUrl} 
                title = {product.name}
              />
              <CardContent>
                <Typography gutterBottom color= 'secondary' variant="h5" >
                 {currencyFormat(product.price)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.type}
                </Typography>
              </CardContent>
            <CardActions>
              <LoadingButton 
              loading={status.includes('loading' + product.id)}
              onClick={()=> dispatch(addBasketItem(({productId: product.id})))} 
              size="small" color="primary">Add to Cart</LoadingButton>
              <Button size="small" color="primary" component={Link} to={`/catalog/${product.id}`}>View</Button>
              
            </CardActions>
          </Card>
    </div>
  );
}

