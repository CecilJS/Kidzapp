import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import agent from "../../app/api/agent";
import { Product, ProductParams } from "../../app/models/product";
import { RootState } from "../../app/store/ConfigStore";
import { MetaData } from "../../app/models/pagination";



interface CatalogState {
    productsLoaded: boolean;
    filtersLoaded: boolean;
    status: string;
    brands: string[];
    types: string[];
    productParams: ProductParams;
    metaData: MetaData | null;
   
}

const productsAdapter = createEntityAdapter<Product>();

function getAxiosParams(productParams: ProductParams) {
    const params = new URLSearchParams();
    params.append("pageNumber", productParams.pageNumber.toString());
    params.append("pageSize", productParams.pageSize.toString());
    params.append("orderBy", productParams.orderBy);
    if (productParams.searchTerm) params.append("searchTerm", productParams.searchTerm);
    if (productParams.brands.length > 0) params.append("brands", productParams.brands.toString());
    if (productParams.types.length > 0) params.append("types", productParams.types.toString());
    
return params;
}

export const fetchProducts = createAsyncThunk<Product[], void, {state: RootState} >(
    'catalog/fetchProducts',
    async (_, thunkAPI) => {
        const params = getAxiosParams(thunkAPI.getState().catalog.productParams);
        try {
            const response = await agent.Catalog.list(params);
            thunkAPI.dispatch(setMetaData(response.metaData));
            return response.items;
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

export const fetchFilters = createAsyncThunk(
    'catalog/fetchFilters',
    async (_, thunkAPI) => {
        try {
            return agent.Catalog.fetchFilters();
        } catch(error){
            return thunkAPI.rejectWithValue(error);
        }
    }
)

function initParams() {
    return {
        pageNumber: 1,
        pageSize: 6,
        orderBy: "name",
        brands: [],
        types: []
    }
}


export const catalogSlice = createSlice({

    name: 'catalog',
    initialState: productsAdapter.getInitialState<CatalogState>({
        productsLoaded: false,
        filtersLoaded: false,
        status: 'idle',
        brands: [],
        types: [],
        productParams: initParams(),
        metaData: null
    }),
    reducers: {
        setProductParams: (state, action) => {
            state.productsLoaded = false;
            state.productParams = {...state.productParams, ...action.payload, pageNumber: 1};
        },
        setPageNumber: (state, action) => {
            state.productsLoaded = false;
            state.productParams = {...state.productParams, ...action.payload};
        },

        setMetaData: (state, action) => {
            state.metaData = action.payload;
        },

        resetProductParams: (state) => {
            state.productParams = initParams();
        }
    },

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

        builder.addCase(fetchFilters.pending, (state) => {
            state.status = 'pendingFetchFilters';
        });
        builder.addCase(fetchFilters.fulfilled, (state, action) => {
            state.brands = action.payload.brands;
            state.types = action.payload.types;
            state.filtersLoaded = true;
            state.status = 'idle';
        });
        builder.addCase(fetchFilters.rejected, (state, action) => {
            state.status = 'idle';
            console.log(action.payload);
        })
    }
}) 

export const productsSelector = productsAdapter.getSelectors((state: RootState) => state.catalog);

export const { setProductParams, resetProductParams, setMetaData, setPageNumber } = catalogSlice.actions;