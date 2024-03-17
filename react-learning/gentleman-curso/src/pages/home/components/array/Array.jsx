export const Array = () => {
    const arreglo = [
        {
            id: 0,
            nombre: 'Ruki'
        },
        {
            id: 1,
            nombre: 'Anya'
        }
    ];
    
    return (
        <ul>
            {arreglo.map(i => 
                <li key={i.id}>{i.nombre}</li>    
            )}
        </ul>
    )
}