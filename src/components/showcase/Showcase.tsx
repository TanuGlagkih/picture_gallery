import React from 'react';
import { useSelector } from 'react-redux';
import { TRootState } from '../../services/config-store';
//@ts-ignore
import Picture from '../picture/Picture.tsx';
import styles from './showcase.module.css'

export default function Showcase() {
    const { pictures, inputData } = useSelector((state: TRootState) => state.mainStore);

    const filteredPictures = inputData
        ?
        pictures.filter(picture => {
            return picture.title.toLowerCase().includes(inputData.toLowerCase())
        })
        :
        pictures

    console.log(filteredPictures)

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Картины эпохи Возрождения</h1>
            <div className={styles.pictureBox}>
                {filteredPictures.map(item => (
                    <Picture picture={item} key={item.id} />
                ))}
            </div>
        </main>
    )
}