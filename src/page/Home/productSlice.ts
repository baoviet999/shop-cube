import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { PRODUCTS } from 'fakedata/fakedata';

export interface Products {
    name: string;
    price: number;
    desc: string;
    img: any;
    hasSale: number;
    id: number;
    [item: string]: any;
}

export interface ProductState {
    products: Products[];
    card: Products[];
}
const initialState: ProductState = {
    products: PRODUCTS,
    card: []
};
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setCount: (state, action) => {
            const { id, count } = action.payload;
            const productIndex = state.products.findIndex((x) => x.id === id);
            if (productIndex >= 0) state.products[productIndex].count = count;
        },
        addToCard: (state, action) => {
            const newItem = action.payload;
            const index = state.card.findIndex((x) => x.id === newItem.id);
            const productIndex = state.products.findIndex((x) => x.id === newItem.id);
            state.products[productIndex].count += 1;
            if (index >= 0) {
                state.card[index].count += 1;
            } else {
                state.card.push({ ...newItem, count: 1 });
            }
        },
        removeCard: (state, action) => {
            const { id } = action.payload;
            console.log('id: ', id);
            const index = state.card.findIndex((x) => x.id === id);
            console.log(index);
            const productIndex = state.products.findIndex((x) => x.id === id);
            console.log('productIndex: ', productIndex);
            // state.products[productIndex].count += 1;
            state.card.splice(index, 1);
        },
    },
});

export const productAction = productSlice.actions;

const productReducer = productSlice.reducer;

export const productSelector = (state: RootState) => state.productReducer.products;
export const cardSelector = (state: RootState) => state.productReducer.card;

export default productReducer;
