import styles from './ProductCard.module.css'

const ProductCard = ({ image, name, price }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={name} className={styles.image} />
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.price}>${price.toFixed(2)}</p>
            <button className={styles.button}>
                Add
            </button>
        </div>
    );
}

export default ProductCard;