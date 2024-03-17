import { useState } from "react"

export const WeatherApp = () => {

    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
    const API_KEY = '605507acf87117e111e54a3ab5238541'
    const diffKelvin = 273.15

    const [city, setCity] = useState('')
    const [dataWeather, setDataWeather] = useState(null)

    const handleCityChange = (event) => {
        setCity(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(city.trim() === '') return
        fetchWeather();
    }

    const fetchWeather = async () => {
        try {
            const res = await fetch(`${baseUrl}?q=${city}&appid=${API_KEY}`)
            const data = await res.json()
            setDataWeather(data)
        } catch(error) {
            console.error(error)
        }
    }

    return (
        <div className="container">
            <h1>WeatherApp</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={city} onChange={handleCityChange} />
                <button type="submit">Search</button>
            </form>
            {dataWeather && (
                <div>
                    <h2>{dataWeather.name}</h2>
                    <p>{dataWeather.weather[0].description}</p>
                    <img src={`https://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@2x.png`} alt="weather icon" />
                    <p>{(dataWeather.main.temp - diffKelvin).toFixed(0)}°C</p>
                </div>
            )}
        </div>
    )
}
