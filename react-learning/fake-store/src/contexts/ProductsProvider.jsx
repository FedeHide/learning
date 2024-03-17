import { ProductContext } from "./ProductContext"
import { useEffect, useState } from "react"
import PropTypes from 'prop-types';

export const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        setProducts(data)
    }

    useEffect(() => {
        fetchProducts()
    
    }, [])

    return (
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )
}

ProductsProvider.propTypes = {
    children: PropTypes.node.isRequired
};