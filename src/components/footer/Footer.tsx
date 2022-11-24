import React from 'react';

export default function Footer() {

    return (
        <footer>
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
                <div>
                    <img src={require('../../assets/icons/phone.svg').default} />
                    <p>+7 (495) 555-55-55</p>
                </div>
                <div>
                    <img src={require('../../assets/icons/address.svg').default} />
                    <p>г. Москва, ул. Расплетина, 24</p>
                </div>
            </section>
        </footer>
    )
}