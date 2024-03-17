import { useEffect, useState } from "react"

export const Button = () => {
    const [data, setData] = useState(1);

    const handleClick = () => {
        setData(10);
    }

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div>
            <span>{data}</span>
            <button onClick={handleClick}>Transform A</button>
        </div>
    )
}