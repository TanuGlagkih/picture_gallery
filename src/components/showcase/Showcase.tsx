import React from 'react';
import { useSelector } from 'react-redux';
import { TRootState } from '../../services/config-store';
import Picture from '../Picture/Picture';

export default function Showcase() {
    const { pictures } = useSelector((state: TRootState) => state.mainStore);

    return (
        <main>
            <section >
                <h1>Картины эпохи Возрождения</h1>
                <div >
                    {pictures.map(item => (
                        <Picture picture={item} key={item.id} />
                    ))}
                </div>
            </section>
        </main>
    )
}