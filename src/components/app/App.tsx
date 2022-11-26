import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { pictures } from '../../assets/data/data';
import { fillCart, fillShowcase } from '../../services/main-store';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Showcase from '../showcase/Showcase';

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fillShowcase(pictures));

        let cart = sessionStorage.getItem('cart');
        cart = JSON.parse(cart);

        if (cart != null && cart.length) {
            dispatch(fillCart(cart))
        }
    }, []);

    return (
        <>
            <Header />
            <Showcase />
            <Footer />
        </>
    )
}