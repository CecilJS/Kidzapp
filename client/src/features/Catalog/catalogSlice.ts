import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import agent from "../../app/api/agent";
import { Product } from "../../app/models/product";
import { RootState } from "../../app/store/ConfigStore";

const productsAdapter = createEntityAdapter<Product>();

export const fetchProducts = createAsyncThunk<Product[]>(
    'catalog/fetchProducts',
    async () => {
        try {
            return await agent.Catalog.list();
        } catch(error){
            console.log(error);
        }
    }
)

export const fetchProduct = createAsyncThunk<Product, number>(
    'catalog/fetchProduct',
    async (productId, thunkAPI) => {
        try {
            return await agent.Catalog.details(productId);
        } catch(error){
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const catalogSlice = createSlice({

    name: 'catalog',
    initialState: productsAdapter.getInitialState({
        status: 'idle',
        productsLoaded: false

    }),
    reducers: {},

    extraReducers: (builder) =>  {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = 'pending';
        });

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'idle';
            state.productsLoaded = true;
            productsAdapter.setAll(state, action.payload);
        });
        
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.status = 'idle';
        });
 builder.addCase(fetchProduct.pending, (state) => {
            state.status = 'pending';
        });
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.status = 'idle';
            productsAdapter.addOne(state, action.payload);
        });
        builder.addCase(fetchProduct.rejected, (state, action) => {
            state.status = 'idle';
        });
    }
}) 

export const productsSelector = productsAdapter.getSelectors((state: RootState) => state.catalog);