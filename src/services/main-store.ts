import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export type TPicture = {
    img: string,
    title: string,
    author: string,
    id: string,
    price: number,
    discount: number | null,

    isSold: boolean,
    isAddedToCart: boolean | string,
};

export type TInitState = {
    pictures: Array<TPicture>,
    cart: number,
    status: string | null,
    id: string | null,
};

const initialState: TInitState = {
    pictures: [],
    cart: null,
    status: null,
    id: null
};

const mainStore = createSlice({
    name: 'mainStore',
    initialState: initialState,
    reducers: {
        fillShowcase(state, action) {
            state.pictures = action.payload;
        },
        addItemToCart(state, action) {
            state.cart++;
            state.pictures = state.pictures.map(item => item.id == action.payload.id
                ?
                item = action.payload
                :
                item
            );
        },
        deleteItem(state, action) {
            state.cart--;
            state.pictures = state.pictures.map(item => item.id == action.payload.id
                ?
                item = action.payload
                :
                item
            );
        },
    },
})

export default mainStore.reducer;
export const { fillShowcase, addItemToCart, deleteItem } = mainStore.actions;