import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart, deleteItem, TPicture } from '../../services/main-store';
import styles from './picture.module.css';

export default function Picture(props: { picture: TPicture }) {
    const picture = props.picture;
    const dispatch = useDispatch();
    const image = require(`../../assets/data/pictures/${picture.img}`).default;
    const price = picture.price?.toLocaleString('ru-RU');
    const discount = picture.discount?.toLocaleString('ru-RU');

    async function fetchData(item: TPicture) {
        let clone = Object.assign({}, item);
        clone = { ...clone, isAddedToCart: 'loading' }
        dispatch(addItemToCart(clone))

        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await res.json();
        console.log(data)
        return data
    }

    const addToCart = (item: TPicture) => {

        fetchData(item)
            .then(() => {
                setTimeout(() => {
                    let clone = Object.assign({}, item);
                    clone = { ...clone, isAddedToCart: true }
                    dispatch(addItemToCart(clone))
                }, 2000);
            })
    }

    const deleteFromCart = (item: TPicture) => {
        let clone = Object.assign({}, item);
        clone = { ...clone, isAddedToCart: false }
        dispatch(deleteItem(clone))
    }

    return (
        <div className={picture.isSold ? styles.sold : styles.card}>
            <img src={image} className={styles.picture}></img>
            <div className={styles.container}>
                <h2 className={styles.caption}>&laquo;{picture.title}&raquo;</h2>
                <h2 className={styles.caption}>{picture.author}</h2>
                <section className={styles.priceBox}>
                    {picture.isSold
                        ?
                        <p className={styles.soldInfo}>Продана на аукционе</p>
                        :
                        <>
                            <div className={styles.priceBlock}>
                                {picture.discount &&
                                    <h6 className={styles.prevPrice}>{discount}$</h6>
                                }
                                <h3 className={styles.price}>{price}$</h3>
                            </div>
                            {!picture.isAddedToCart ? (
                                <button
                                    onClick={() => addToCart(picture)}
                                    className={styles.button}>
                                    Купить
                                </button>
                            ) : (
                                picture.isAddedToCart == true ? (
                                    <button
                                        onClick={() => deleteFromCart(picture)}
                                        className={styles.buttonInCart}>
                                        ✔ В корзине
                                    </button>
                                ) : (
                                    <button disabled
                                        className={styles.button}>
                                        Добавляется...
                                    </button>
                                )
                            )
                            }
                        </>
                    }
                </section>
            </div>
        </div>
    )
}