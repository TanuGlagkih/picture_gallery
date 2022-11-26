import React from 'react';
import Menu from '../menu/Menu';
import styles from './footer.module.css'

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <Menu dark={true} />
            <section className={styles.contacts}>
                <div className={styles.info}>
                    <img
                        src={require('../../assets/icons/phone.svg').default}
                        className={styles.img} />
                    <p className={styles.text}>+7 (495) 555-55-55</p>
                </div>
                <div className={styles.info}>
                    <img
                        src={require('../../assets/icons/address.svg').default}
                        className={styles.img} />
                    <p className={styles.text}>г. Москва, ул. Расплетина, 24</p>
                </div>
            </section>
        </footer>
    )
}