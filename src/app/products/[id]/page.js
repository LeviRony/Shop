'use client';

import { notFound } from 'next/navigation'
import styles from './page.module.css'
import { useSetAtom } from 'jotai';
import { CartAtom } from '../../store/CartAtom';


function getProduct(id) {
    const products = [
        { id: 1, image: 'https://placehold.co/600x400', name: 'Sample Product 1', price: 29.99, description: 'This is the first sample product.' },
        { id: 2, image: 'https://placehold.co/600x400', name: 'Sample Product 2', price: 19.99, description: 'This is the second sample product.' },
        { id: 3, image: 'https://placehold.co/600x400', name: 'Sample Product 3', price: 39.99, description: 'This is the third sample product.' },
    ];

    return products.find((product) => product.id.toString() === id);
}


export default function ProductDetails({ params }) {
    const { id } = params;
    const product = getProduct(id);  /* product itmem saved here */ 

    if (!product) {
        notFound();
        return <p>Product not found</p>;
    }
    const setCartItens = useSetAtom(CartAtom);
    const handleAddToCart = () => {
        setCartItens((prevItems) => {
            return [...prevItems, {...product}]
        }
        );
    }

    return (
        <main className={styles.container}>
            <article className={styles.product}>
                <h1 className={styles.title}>{product.name}</h1>
                <section className={styles.content}>
                    <div className={styles.descriptionSection}>
                        <p className={styles.description}>{product.description}</p>
                    </div>
                    <div className={styles.imageSection}>
                        <img
                            src={product.image}
                            alt={product.name}
                            className={styles.image}
                        />
                    </div>
                </section>
                <hr className={styles.divider} />
                <section className={styles.bottomSection}>
                    <p className={styles.price}>Price: ${product.price.toFixed(2)}</p>
                    <button className={styles.button} onClick={handleAddToCart}>Add to Cart</button>
                </section>
            </article>
        </main>
    )
}