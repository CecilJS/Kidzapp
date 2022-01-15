import { useEffect } from "react";
import LoadingComponent from "../../app/layout/LoadingComponents";
import { useAppDispatch, useAppSelector } from "../../app/store/ConfigStore";
import { fetchProducts, productsSelector } from "./catalogSlice";
import ProductList from "./ProductList";




export default function Catalog (){
  const products = useAppSelector(productsSelector.selectAll);
  const {productsLoaded, status} = useAppSelector(state => state.catalog);
  const dispatch = useAppDispatch();


  useEffect(() => {
   if(!productsLoaded) dispatch(fetchProducts()); 
  }, [dispatch, productsLoaded]);

  if (status.includes('pending')) return <LoadingComponent message='Loading products...' />
    return(
        <>
        <h1>Catalog</h1>
      
        <ProductList products={products}/>
      </>
    )
}

