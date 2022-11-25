import React from 'react';
import styles from './menu.module.css'

export default function Menu() {

    return (
        <div className={styles.box}>
            <img src={require('../../assets/icons/logo.svg').default} />
            <p className={styles.text}>Каталог</p>
            <p className={styles.text}>Доставка</p>
            <p className={styles.text}>Оплата</p>
            <p className={styles.text}>Контакты</p>
            <p className={styles.text}>О галерее</p>
        </div>

    )
}