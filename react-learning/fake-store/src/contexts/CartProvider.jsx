import PropTypes from 'prop-types';
import { CartContext } from './CartContext';
import { useReducer } from 'react';

const initialState = []


export const CartProvider = ({children}) => {
    
    const shoppingReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case '[CART] Add to cart':
                return [ ...state, action.payload]

                case '[CART] Remove from cart':
                return state.filter((product) => product.id !== action.payload)

            case '[CART] Increase quantity':
                return state.map((product) => product.id === action.payload
                    ? {...product, quantity: product.quantity + 1}
                    : product
                )

                case '[CART] Decrease quantity':
                    return state.map((product) => product.id === action.payload && product.quantity > 1
                    ? {...product, quantity: product.quantity - 1}
                    : product
                )
                
            default:
                return state
            }
    }
    
    const [cartList, dispatch] = useReducer(shoppingReducer, initialState)
    
    const addToCart = (shopping) => {
        shopping.quantity = 1
        const action = {
            type: '[CART] Add to cart',
            payload: shopping
        }
        dispatch(action)
    }
    
    const removeFromCart = (id) => {
        const action = {
            type: '[CART] Remove from cart',
            payload: id
        }
        dispatch(action)
    }
    
    const increaseQuantity = (id) => {
        const action = {
            type: '[CART] Increase quantity',
            payload: id
        }
        dispatch(action)
    }
    
    const decreaseQuantity = (id) => {
        const action = {
            type: '[CART] Decrease quantity',
            payload: id
        }
        dispatch(action)
    }
    
    return (
        <CartContext.Provider value={{cartList, addToCart, removeFromCart, increaseQuantity, decreaseQuantity}} >
            {children}
        </CartContext.Provider>
    )
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
};