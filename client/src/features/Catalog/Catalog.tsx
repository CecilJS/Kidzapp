import { Grid, Paper} from "@mui/material";
import { useEffect } from "react";
import AppPagination from "../../app/components/AppPagination";
import CheckboxButtons from "../../app/components/CheckboxButtons";
import RadioButtonGroup from "../../app/components/RadioButtonGroup";
import LoadingComponent from "../../app/layout/LoadingComponents";
import { useAppDispatch, useAppSelector } from "../../app/store/ConfigStore";
import { fetchFilters, fetchProducts, productsSelector, setPageNumber, setProductParams } from "./catalogSlice";
import ProductList from "./ProductList";
import ProductSearch from "./ProductSearch";


const sortOptions = [
    {value: "name", label: "Alphabetical"},
    {value: "priceDesc", label: "Price - High to High"},
    {value: "price", label: "Price - Low to High"},


]

export default function Catalog (){
  const products = useAppSelector(productsSelector.selectAll);
  const {productsLoaded, filtersLoaded, brands, types, productParams, metaData} = useAppSelector(state => state.catalog);
  const dispatch = useAppDispatch();


  useEffect(() => {
   if(!productsLoaded) dispatch(fetchProducts()); 
   if(!productsLoaded) dispatch(fetchFilters()); 
  }, [dispatch, productsLoaded, filtersLoaded]);

 if ((!filtersLoaded) || !metaData) return <LoadingComponent message='Loading products...' />

    return(
        <Grid container columnSpacing={4} sx={{marginTop: 15, mb: 5}}>
        <Grid item xs={3}>
         <Paper sx={{mb: 2}}>
            <ProductSearch/>
         </Paper>
         <Paper sx={{mb: 2}}>
         <RadioButtonGroup
         selectedValue={productParams.orderBy}
          options={sortOptions}
          onChange={ e => dispatch(setProductParams({orderBy: e.target.value}))}

         />
           </Paper>
           <Paper sx={{mb: 2}}>
           <CheckboxButtons
              items={brands}
              checked={productParams.brands}
              onChange={ (items: string[]) => dispatch(setProductParams({brands: items}))}
              />
           </Paper>
           <Paper sx={{mb: 2}}>
              <CheckboxButtons
              items={types}
              checked={productParams.types}
              onChange={ (items: string[]) => dispatch(setProductParams({types: items}))}
              />
           </Paper>
        </Grid>
        <Grid item xs={9}>
        <ProductList products={products}/>
        </Grid>
        <Grid item xs={3}/>
        <Grid item xs={9} sx={{mb: 2}}>
                {metaData &&
                <AppPagination 
                    metaData={metaData}
                    onPageChange={(page: number) => dispatch(setPageNumber({pageNumber: page}))}
                />}
            </Grid>
      </Grid>
    )
}

