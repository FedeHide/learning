let api_key = '605507acf87117e111e54a3ab5238541';
let difKelvin = 273.15;
let urlBase = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value;
    if(ciudad) {
        fetchDatosClima(ciudad);
    }
})

function fetchDatosClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data) {
    console.log(data);
    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML = '';

    const ciudadNombre = data.name;
    const paisNombre = data.sys.country;
    const temperatura = data.main.temp;
    const descripcion = data.weather[0].description;
    let mainDescription = data.weather[0].main;
    const humedad = data.main.humidity;
    const icono = data.weather[0].icon;

    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`;

    const temperaturaInfo = document.createElement('p');
    temperaturaInfo.textContent = `La temperatura es ${Math.floor(temperatura - difKelvin)}°C`;

    const humedadInfo = document.createElement('p');
    humedadInfo.textContent = `La humedad es ${humedad}%`;


    const iconoInfo = document.createElement('img');
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`;;
    
    const descripcionInfo = document.createElement('p');
    descripcionInfo.textContent = `La descripción meteorologica es: ${traducirDesc(mainDescription)}`;

    
    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(temperaturaInfo);
    divDatosClima.appendChild(humedadInfo);
    divDatosClima.appendChild(iconoInfo);
    divDatosClima.appendChild(descripcionInfo);
}


function traducirDesc(mainDescription) {
    switch (mainDescription) {
        case 'Thunderstorm':
            return mainDescription = 'Tormentas';
        case 'Drizzle':
            return mainDescription = 'Llovizna';
        case 'Rain':
            return mainDescription = 'Lluvia';
        case 'Snow':
            return mainDescription = 'Nieve';
        case 'Clear':
            return mainDescription = 'cielo despejado';
        case 'Clouds':
            return mainDescription = 'Cielo nublado';
        case 'Mist':
            return mainDescription = 'Neblina';
        case 'Smoke':
            return mainDescription = 'Humo';        
        case 'Haze':
            return mainDescription = 'Bruma';
        case 'Dust':
            return mainDescription = 'Polvo';
        case 'Fog':
            return mainDescription = 'Niebla';
        case 'Sand':
            return mainDescription = 'Arena';
        case 'Ash':
            return mainDescription = 'Ceniza';
        case 'Squall':
            return mainDescription = 'Chubasco';
        case 'Tornado':
            return mainDescription = 'Tornado';    
        default:
            return mainDescription;
    }
}