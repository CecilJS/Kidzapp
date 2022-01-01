import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import Catalog from "../../features/Catalog/Catalog";
import { Product } from "../models/product";
import Header from "./Header";

function App() {
const [products, setProducts] = useState<Product[]>([]);

useEffect(() => {

  fetch('http://localhost:5000/api/products')
  .then(response => response.json())
  .then(data => setProducts(data))
  
}, []);

function addProduct() {
  setProducts(prevState => [...prevState,
  { 
        id: prevState.length + 101,
        name: 'Phone XL', 
        price: 799, 
        brand: 'Iphone',
        description: 'A large phone case with one of the best screens',
        pictureUrl: 'http://picsum.photos/200/300'}]);
}


  return (
    <div>
      <Header/>
      <Container>
          <Catalog products={products} addProduct={addProduct}/>
      </Container>
      
      
    </div>
  );
}

export default App;
