import { useState, useEffect } from 'react';
import { fetchData } from '../utils/fetchData';

export const useFetchData = (endPoint) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    
    
    useEffect(() => {
        const getData = async () => {
            const { data, isLoading } = await fetchData(endPoint);
            console.log(data)
            setData(data);
            setIsLoading(isLoading);
        }
        // fetchData(endPoint)
        // .then(({ data, isLoading }) => {
        //     setData(data);
        //     setIsLoading(isLoading);
        // })
        getData();
    }, [endPoint]);

    return {
        data,
        isLoading
    }
}