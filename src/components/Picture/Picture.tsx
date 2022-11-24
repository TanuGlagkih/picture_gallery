import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart, deleteItem, TPicture } from '../../services/main-store';

export default function Picture(props: { picture: TPicture }) {
    const picture = props.picture;
    const dispatch = useDispatch();
    const image = require(`../../assets/data/pictures/${picture.img}`).default;

    const addToCart = (id: string) => {
        dispatch(addItemToCart(id))
    }

    const deleteFromCart = (id: string) => {
        dispatch(deleteItem(id))
    }

    const btn = picture.isAddedToCart ?
        (<button onClick={() => deleteFromCart(picture.id)}>В корзине</button>)
        :
        (<button onClick={() => addToCart(picture.id)}>Купить</button>)

    return (
        <div>
            <img src={image}></img>
            <h2>&laquo;{picture.title}&raquo;</h2>
            <h2>{picture.author}</h2>
            <section>
                {picture.isSold
                    ?
                    <p>Продана на аукционе</p>
                    :
                    <>
                        <div>
                            <h6>{picture.discount}$</h6>
                            <h3>{picture.price}$</h3>
                        </div>
                        {btn}
                    </>
                }
            </section>
        </div>
    )
}