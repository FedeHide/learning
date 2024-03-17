import { useState } from 'react'
import { useGetCalculo } from '../hooks/useGetCalculo'

export const Calcs = () => {
    const [numList, setNumList] = useState([2, 3, 4, 5, 6, 7, 8, 9])
    const [show, setShow] = useState(true)

    const agregarNumero = () => {
        setNumList([...numList, numList[numList.length - 1] + 1]) 
        console.log(numList)
    }

    return (
        <>
            <h2>Calculo:</h2>
            <p>{useGetCalculo(numList)}</p>
            <button className='btn btn-primary' onClick={() => setShow(!show)}>{ show ? 'Show' : 'Hide'}</button>
            <button className='btn btn-primary' onClick={() => agregarNumero()}>Agregar numero</button>
        </>
    )
}
