import React from 'react';

export default function Header() {

    return (
        <header>
            <section>
                <div>
                    <img src={require('../../assets/icons/logo.svg').default} />
                    <p>Каталог</p>
                    <p>Доставка</p>
                    <p>Оплата</p>
                    <p>Контакты</p>
                    <p>О галерее</p>
                </div>
            </section>
            <section>

            </section>
        </header>
    )
}