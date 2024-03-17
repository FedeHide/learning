import { useCallback, useState } from "react";
import { Increment } from "./Increment";

export const Callback = () => {

    const [counter, setCounter] = useState(0)

    const incrementarPadre = useCallback((val) => {
        setCounter(c => c + val)
    }, [])

    return (
        <>
            <h1>Contador: {counter}</h1>
            <Increment incrementar={incrementarPadre}/>
        </>
    )
}
