import { useCounter } from "../hooks/useCounter"

export const Counter = () => {

    const {counter, increase, decrease, reset } = useCounter(0) 

    return (
        <>
            <h1>counter: {counter}</h1>
            <button className="btn btn-primary" onClick={ () => increase(1) }>+1</button>
            <button className="btn btn-danger" onClick={ () => reset() }>Reset</button>
            <button className="btn btn-primary" onClick={ () => decrease(1, false) }>-1</button>
        </>
    )
}
