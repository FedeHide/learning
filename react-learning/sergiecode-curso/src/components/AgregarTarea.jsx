import { useState } from "react"
import propTypes from 'prop-types'

export const AgregarTarea = ({agregarTarea}) => {
    const [inputValue, setInputValue] = useState('')
    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        agregarTarea(inputValue)
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                name="" 
                id="" 
                placeholder="Agregar Tare nueva"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

AgregarTarea.propTypes = {
    agregarTarea: propTypes.func.isRequired,
};