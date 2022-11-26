import { createSlice } from '@reduxjs/toolkit';

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
    inputData: string | undefined,
    status: string | null,
    cart: Array<TPicture>,
};

const initialState: TInitState = {
    pictures: [],
    inputData: null,
    status: null,
    cart: []
};

const mainStore = createSlice({
    name: 'mainStore',
    initialState: initialState,
    reducers: {
        fillShowcase(state, action) {
            state.pictures = action.payload;
        },
        addItemToCart(state, action) {
            if (action.payload.isAddedToCart === true) {

                state.cart.push(action.payload)
                sessionStorage.setItem('cart', JSON.stringify(state.cart));
            }

            state.pictures = state.pictures.map(
                item => item.id == action.payload.id
                    ?
                    item = action.payload
                    :
                    item
            );
        },
        deleteItem(state, action) {
            state.cart = state.cart.filter(item => item.id != action.payload.id);
            sessionStorage.setItem('cart', JSON.stringify(state.cart));
            state.pictures = state.pictures.map(item => item.id == action.payload.id
                ?
                item = action.payload
                :
                item
            );
        },
        fillCart(state, action) {
            state.cart = action.payload.length;
            state.cart = action.payload;

            for (let i = 0; i < state.cart.length; i++) {
                state.pictures = state.pictures.map(
                    item => item.id == state.cart[i].id
                        ?
                        item = state.cart[i]
                        :
                        item
                );
            }
        },
        findPicture(state, action) {
            state.inputData = action.payload
        }
    },
})

export default mainStore.reducer;
export const { fillShowcase, addItemToCart, deleteItem, fillCart, findPicture } = mainStore.actions;