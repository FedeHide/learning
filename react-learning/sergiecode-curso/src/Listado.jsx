import { useState } from "react";
import PropTypes from 'prop-types';
import { AgregarTarea } from "./components/AgregarTarea";

const Item = ({ nombre, visto }) => {
    return (
        <li>
            {nombre}
            {visto ? ' ✅' : ' ❌'}
        </li>
    )
}

export const Listado = () => {

    let listadoSecciones = [
        { id: 1, nombre: 'instalaciones necesarias', visto: true },
        { id: 2, nombre: 'Uso de vite', visto: true },
        { id: 3, nombre: 'Componentes', visto: true },
        { id: 4, nombre: 'Variables en JSX', visto: true },
        { id: 5, nombre: 'Props', visto: true },
        { id: 6, nombre: 'Eventos', visto: true },
        { id: 7, nombre: 'useState', visto: true },
        { id: 8, nombre: 'Redux', visto: false },
        { id: 9, nombre: 'customHooks', visto: false }
    ]

    const [arreglo, setArreglo] = useState(listadoSecciones)

    const agregarTarea = (val) => {
        let valor = val.trim()
        if (!valor) return 
        const envio = {
            id: arreglo.length + 1,
            nombre: valor,
            visto: false
        }
        setArreglo([...arreglo, envio])
        listadoSecciones.push(envio)
        console.log(listadoSecciones)
    }

    return (
        <>
            <h1>Listado de Temas del Curso</h1>
            <AgregarTarea agregarTarea={agregarTarea}></AgregarTarea>
            <ul>
                {arreglo.map(item => <Item key={item.id} nombre={item.nombre} visto={item.visto}></Item>)}

            </ul>
        </>
    )
}

Item.propTypes = {
    nombre: PropTypes.string.isRequired,
    visto: PropTypes.bool.isRequired,
};

export default Listado;
