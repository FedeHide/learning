import Link from 'next/link'

export const metadata = {
	title: 'Tienda oficial',

}

const storeLayout = ({children}) => {
    return (
        <>
            <nav>
                <h3>Store section</h3>

                <ul>
                    <li>
                        <Link href="/store/categorias">Categorias</Link>
                    </li>
                    <li>
                        <Link href="/store/categorias/laptops/">Laptops</Link>
                    </li>
                    
                </ul>
            </nav>
            {children}
        </>
    )
}
export default storeLayout