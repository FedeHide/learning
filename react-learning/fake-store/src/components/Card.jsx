import PropTypes from 'prop-types';
import '../styles/card.css'
import { useContext } from 'react';
import { AddedContext } from '../contexts/AddedContext';

export const Card = ({ image, title, description, price, handleAddToCart, handleRemoveFromCart }) => {
    
    const { addCard, removeCard, cards } = useContext(AddedContext);
    const isAdded = cards.includes(title);

    const handleClick = () => {
        if (isAdded) {
            removeCard(title);
            handleRemoveFromCart()
        } else {
            addCard(title);
            handleAddToCart()
        }
    };
    
    return (
        <div className="tarjeta">
            <img className="tarjeta-imagen" src={image} alt={title} />
            <div className="tarjeta-contenido">
                <h3 className="tarjeta-titulo">{title}</h3>
                <p className="tarjeta-descripcion">{description}</p>
                <p className="tarjeta-precio">${price}</p>
                <button
                    type='button'
                    className={isAdded ? "boton-quitar" : "boton-agregar"}
                    onClick={handleClick}
                >
                    {isAdded ? 'Remove' : 'Add'}
                </button>
            </div>
        </div>
    );
};

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    handleAddToCart: PropTypes.func.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired,
    handleIncreaseQuantity: PropTypes.func,
    handleDecreaseQuantity: PropTypes.func
}




