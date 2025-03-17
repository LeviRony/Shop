"use client";
import styles from './page.module.css';
import ProductList from '../components/Product/ProductList';
import { useSetAtom } from 'jotai';
import { CartAtom } from '../store/CartAtom';

const products = [
    { id: 1, image: 'https://placehold.co/600x400', name: 'Sample Product 1', price: 299.99 },
    { id: 2, image: 'https://placehold.co/600x400', name: 'Sample Product 2', price: 19.99 },
    { id: 3, image: 'https://placehold.co/600x400', name: 'Sample Product 3', price: 39.99 },
];

export default function Products() {
    const setCartItems = useSetAtom(CartAtom);

    const handleAddToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);
            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Product List</h1>
            <ProductList products={products} onProductAddClicked={handleAddToCart} />
        </div>
    );
}
