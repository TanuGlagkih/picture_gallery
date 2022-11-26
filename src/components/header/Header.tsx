import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { TRootState } from '../../services/config-store';
import { findPicture } from '../../services/main-store';
import Menu from '../menu/Menu';
import styles from './header.module.css'

export default function Header() {
    const dispatch = useDispatch();
    const { cart } = useSelector((state: TRootState) => state.mainStore);

    const search = (data: string) => {
        dispatch(findPicture(data))
    }

    return (
        <header className={styles.header}>
            <Menu dark={false} />
            <section className={styles.search}>
                <input
                    className={styles.input}
                    placeholder='Поиск по названию картины'
                    onChange={e => search(e.target.value)}
                ></input>
                <button className={styles.button}>Найти</button>
            </section>
            <section className={styles.container}>
                <img
                    src={require('../../assets/icons/cart.svg').default}
                    className={styles.icon} />
                <div className={styles.counter}>{cart.length}</div>
            </section>
        </header>
    )
}