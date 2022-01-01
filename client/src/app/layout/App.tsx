import { useEffect, useState } from "react";
import { Product } from "../models/product";

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
      <h1>Kidz App</h1>
      <ul>
        {products.map((product)=> (
          <li key={product.id}>{product.name} - {product.price} - {product.description}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default App;
