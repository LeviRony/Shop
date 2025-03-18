'use client'; /* reduce will be on client side only */
import styles from './page.module.css';
import { cartAtom } from '../store/CartAtom';
import { useAtom } from 'jotai';
import { useState, useEffect } from 'react';

const Cart = () => {
    const [cartItems, setCartItems] = useAtom(cartAtom);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect( /* will update the state each time the cart is update*/
        () => {
            const newTotalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
            setTotalPrice(newTotalPrice);
        },
        [cartItems]); 
    const emptyCart = () => {
        setCartItems([]);
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.mainHeader}>Your Cart</h1>

            <ul className={styles.cartList}>
                {
                    cartItems.map((item) => (
                        <li
                            key={item.id}
                            className={styles.cartItem}>
                            <span className={styles.itemName}>{item.name}</span>
                            <span className={styles.itemPrice}>${item.price.toFixed(2)}</span>
                        </li>
                    ))
                }
            </ul>

            <div className={styles.total}>
                <span>Total:</span>
                <span className={styles.totalPrice}>${totalPrice.toFixed(2)}</span>
            </div>

            <div className={styles.actions}>
                <button className={styles.payButton}>Pay Now</button>
                <button className={styles.emptyButton} onClick={emptyCart}>Empty the Cart</button>
            </div>


        </div>
    );
};

export default Cart;