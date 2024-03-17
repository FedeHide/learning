import { useState } from 'react'

export const useCounter = (initialValue = 0) => {
    const [counter, setCounter] = useState(initialValue)

    const increase = (val = 1) => {
        setCounter(counter + val)
    }

    const decrease = (val = 1, negative) => {
        if(!negative && counter < val ) {
            setCounter(0)
            return
        } 
        setCounter(counter - val)
    }

    const reset = () => {
        setCounter(0)
    }


    return {
        counter,
        increase,
        decrease,
        reset
    }
}
