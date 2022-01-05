import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/product";

interface Props {
    product: Product;
}

export default function ProductCard({ product}: Props) {
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
                 £{product.price.toFixed(2)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.type}
                </Typography>
              </CardContent>
            <CardActions>
              <Button size="small" color="primary">Add to Cart</Button>
              <Button size="small" color="primary" component={Link} to={`/catalog/${product.id}`}>View</Button>
              
            </CardActions>
          </Card>
    </div>
  );
}