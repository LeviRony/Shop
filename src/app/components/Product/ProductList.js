import ProductCard from "./ProductCard";
import Link from 'next/link';

const ProductList = ({ products }) => {
    return (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {
                products.map((product) => {
                    return (
                        <Link
                            key={product.id}
                            href={`/products/${product.id}`}
                            passHref >
                            <ProductCard
                                image={product.image}
                                name={product.name}
                                price={product.price}
                            />
                        </Link>
                    )
                })
            }

        </div>
    );
}

export default ProductList;