import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Shopping } from './pages/Shopping';
import { Cart } from './pages/Cart';
import { ProductsProvider } from './contexts/ProductsProvider';
import { CartProvider } from './contexts/CartProvider';
import { AddedProvider } from './contexts/AddedProvider';

export const CartApp = () => {
    return (
        <AddedProvider>
            <ProductsProvider>
                <CartProvider>
                    <Navbar />
                    <div className="container">
                        <Routes>
                            <Route path='/' element={<Shopping />} ></Route>
                            <Route path='/fake-store/src/pages/Cart.jsx' element={<Cart />} ></Route>
                            <Route path='/*' element={<Navigate to="./" />} ></Route>
                        </Routes>            
                    </div>
                </CartProvider>
            </ProductsProvider>
        </AddedProvider>
    )
}
