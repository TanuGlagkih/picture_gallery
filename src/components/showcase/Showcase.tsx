import React from 'react';
import { useSelector } from 'react-redux';
import { TRootState } from '../../services/config-store';
import Picture from '../picture/Picture';
import styles from './showcase.module.css'

export default function Showcase() {
    const { pictures } = useSelector((state: TRootState) => state.mainStore);

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Картины эпохи Возрождения</h1>
            <div className={styles.pictureBox}>
                {pictures.map(item => (
                    <Picture picture={item} key={item.id} />
                ))}
            </div>
        </main>
    )
}