import { useMemo } from 'react';

export const useGetCalculo = (numList) => {
    const result = useMemo(() => {
        console.log('Calculando...');
        return numList.reduce((acc, el) => acc * el, 1); // Initialize accumulator with 1
    }, [numList]);

    return result;
};
