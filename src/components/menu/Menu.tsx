import React from 'react';
import styles from './menu.module.css'

export default function Menu(props: { dark: boolean }) {
    const url = props.dark ?
        require('../../assets/icons/logoDark.svg').default
        :
        require('../../assets/icons/logo.svg').default

    return (
        <div className={styles.box}>
            <img src={url} />
            <p className={styles.text}>Каталог</p>
            <p className={styles.text}>Доставка</p>
            <p className={styles.text}>Оплата</p>
            <p className={styles.text}>Контакты</p>
            <p className={styles.text}>О галерее</p>
        </div>

    )
}