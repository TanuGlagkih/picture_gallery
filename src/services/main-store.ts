import { createSlice } from '@reduxjs/toolkit';

export type TPicture = {
    img: string,
    title: string,
    author: string,
    id: string,
    price: number,
    discount: number | null,

    isSold: boolean,
    isAddedToCart: boolean
};

export type TInitState = {
    pictures: Array<TPicture>,
    cart: number
};

const initialState: TInitState = {
    pictures: [],
    cart: null
};

const mainStore = createSlice({
    name: 'mainStore',
    initialState: initialState,
    reducers: {
        fillShowcase(state, action) {
            state.pictures = action.payload;
        },
        addItemToCart(state, action) {
            state.cart++
        },
        deleteItem(state, action) {
            // state.pictures = state.pictures.map(item => (item.id == action.payload.id)
            //     ?
            //     item.isAddedToCart = false
            //     :
            //     item
            //  );
        },
    }
})

export default mainStore.reducer;
export const { fillShowcase, addItemToCart, deleteItem } = mainStore.actions;