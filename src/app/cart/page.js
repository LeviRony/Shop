import styles from './page.module.css';


const cartItems = [
    { id: 1, name: 'Item 1', price: 100 },
    { id: 2, name: 'Item 2', price: 200 },
    { id: 3, name: 'Item 3', price: 300 },
];

const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);


const Cart = () => {
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
                <button className={styles.emptyButton}>Empty the Cart</button>
            </div>


        </div>
    );
};

export default Cart;