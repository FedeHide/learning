import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { Card } from "../components/Card"
import { CartContext } from '../contexts/CartContext';

export const Shopping = () => {
    const { products } = useContext(ProductContext);


    const {  addToCart, removeFromCart } = useContext(CartContext);

    const handleAddToCart = (shopping) => {
        addToCart(shopping)
    }

    const handleRemoveFromCart = (id) => {
        removeFromCart(id)
    }

    return (
        <>
            <h1>Shopping: </h1>
            <hr />

            { products.map((product) => (
                <Card 
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    handleAddToCart={() => handleAddToCart(product)}
                    handleRemoveFromCart={() => handleRemoveFromCart(product.id)}
                />
            ))}
        </>
    )
}
