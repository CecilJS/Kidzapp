import { LoadingButton } from "@mui/lab";
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import agent from "../../app/api/agent";
import { useStoreContext } from "../../app/context/StoreContext";
import { Product } from "../../app/models/product";
import { currencyFormat } from "../../app/util/util";

interface Props {
    product: Product;
}

export default function ProductCard({ product}: Props) {
const [loading, setLoading] = useState(false);
const {setBasket} = useStoreContext();

function handleAddToCart(productId: number ) {
    setLoading(true);
    agent.Basket.addItem(productId)
    .then(basket => setBasket(basket))
    .catch(err => console.log(err))
    .finally(() => setLoading(false));
}


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
              loading={loading} 
              onClick={()=> handleAddToCart(product.id)} 
              size="small" color="primary">Add to Cart</LoadingButton>
              <Button size="small" color="primary" component={Link} to={`/catalog/${product.id}`}>View</Button>
              
            </CardActions>
          </Card>
    </div>
  );
}