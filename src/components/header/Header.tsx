import React from 'react';
import Menu from '../menu/Menu';
import styles from './header.module.css'

export default function Header() {

    return (
        <header className={styles.header}>
            <Menu />
            <div className={styles.search}>
                <input className={styles.input} placeholder='Поиск по названию картины'></input>
                <button className={styles.button}>Найти</button>
            </div>
        </header>
    )
}