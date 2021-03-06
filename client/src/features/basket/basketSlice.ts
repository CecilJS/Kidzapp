import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import agent from "../../app/api/agent";
import { Basket } from "../../app/models/basket";

interface BasketState {
    basket: Basket | null;
    status : string;

}

const initialState: BasketState = { 
    basket: null, 
    status: 'idle' 
};

export const addBasketItem = createAsyncThunk<Basket, {productId: number, quantity?: number}>(
 'basket/addBasketItemAsync',
 async({productId, quantity = 1}) => {
 try {
 return await agent.Basket.addItem(productId, quantity);
 } catch(error){
    console.log(error);
 }

 }
) 

export const removeBasketItem = createAsyncThunk<Basket, {productId: number, quantity: number, name?: string}>(
    'basket/removeBasketItem',
    async({productId, quantity}) => {
        try {
            return await agent.Basket.removeItem(productId, quantity);
        } catch(error){
            console.log(error);
        }

    }
)


export const basketSlice = createSlice({

    name: 'basket',
    initialState,
    reducers: {
        setBasket: (state, action) => {
            state.basket = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addBasketItem.pending, (state, action) => {
            state.status = 'pendingAddItem'+ action.meta.arg.productId;
        });
        builder.addCase(addBasketItem.fulfilled, (state, action) => {
            state.status = 'idle';
            state.basket = action.payload;
        });
        builder.addCase(addBasketItem.rejected, (state, action) => {
            state.status = 'idle';
        });

        builder.addCase(removeBasketItem.pending, (state, action) => {
            state.status = 'pendingRemoveItem'+ action.meta.arg.productId + action.meta.arg.name;
        });

        builder.addCase(removeBasketItem.fulfilled, (state, action) => {
            const {productId, quantity} = action.meta.arg;
            const itemIndex = state.basket?.items.findIndex(item => item.productId === productId);
            if(itemIndex === -1 || itemIndex === undefined) return;
            state.basket!.items[itemIndex].quantity -= quantity;
            if(state.basket?.items[itemIndex].quantity === 0) {
                state.basket.items.splice(itemIndex, 1);
                
            }
            state.status = 'idle';
        });

        builder.addCase(removeBasketItem.rejected, (state, action) => {
            state.status = 'idle';
        });
    }
});

export const { setBasket } = basketSlice.actions;
