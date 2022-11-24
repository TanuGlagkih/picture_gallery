import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { pictures } from '../../assets/data/data';
import { fillShowcase } from '../../services/main-store';
import Footer from '../footer/footer';
import Header from '../header/header';
import Showcase from '../showcase/showcase';

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fillShowcase(pictures));
    }, []);
    return (
        <>
            <Header />
            <Showcase />
            <Footer />
        </>
    )
}