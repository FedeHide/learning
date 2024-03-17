import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export const Cart = () => {

    const handlePrint = () => {

        print()
    }

    const { cartList, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cartList.map(product => (
                        <tr key={product.id}>
                            <th scope="row">{product.title}</th>
                            <td>${(product.price * product.quantity).toFixed(2)}</td>
                            <td className=''>
                                <button className="btn btn-ouline-primary" onClick={() => decreaseQuantity(product.id)}>-</button>
                                <button className='btn btn-primary'>{product.quantity}</button>
                                <button className="btn btn-ouline-primary" onClick={() => increaseQuantity(product.id)}>+</button>
                            </td>
                            <td><button className='btn btn-danger' onClick={() => removeFromCart(product.id)}>Remove</button></td>
                        </tr>
                    ))}
                    <tr>
                        <th>Total</th>
                        <td>${cartList.reduce((acc,el) => { return acc + el.price * el.quantity }, 0).toFixed(2)}</td>
                        <td></td>
                        <td><button className="btn btn-primary" disabled={cartList < 1} onClick={handlePrint} >Buy</button></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
