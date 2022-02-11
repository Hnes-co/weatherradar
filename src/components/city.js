
const City = ({cityData}) => {

    const times = [9, 12, 15, 18, 21, 0, 3, 6]

    return (
        <div className="city-grid-item">
            <div className="grid-item grid-item-main">
                <div className="grid-item-top">
                    <div className="item-title">
                        <div className="item-title-left">
                            <label className="item-title-city">{cityData.name}</label>
                            <label className="item-description">{cityData.weather[0].description}</label>
                        </div>
                        <div className="item-title-right">
                            <img src={`http://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png`} alt="icon.png"></img>
                            <label className="item-title-temp"> {Math.round(cityData.main.temp)} °C</label>
                        </div>
                    </div>
                </div>
                <div className="grid-item-bottom">
                    <div className="item-date">
                        <label className="item-date-day">{new Date(cityData.dt * 1000).toLocaleDateString([], {month: 'long', day: 'numeric'})}</label>
                        <label className="item-date-time">{new Date(cityData.dt * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</label>
                    </div>
                    <div className="item-details">
                        <label className="item-details-wind">Wind: {Math.round(cityData.wind.speed * 10) / 10} m/s</label>
                        <label className="item-details-humidity">Humidity: {cityData.main.humidity} %</label>
                        <label className="item-details-precipitation">Percipitation (3 h): {cityData.rain ? cityData.rain['3h'] : cityData.snow ? cityData.snow['3h'] : 0} mm</label>
                    </div>
                </div>
            </div>
            <div className="weather-time-table">
                {times.map(e => (
                    <div className="time-table-item" key={e}>
                        <div className="time-table-item-container">
                            <div className="time-table-item-top">
                                <label className="item-date-time">{e < 10 ? `0${e}:00` : `${e}:00`}</label>
                                <img src={`http://openweathermap.org/img/wn/${cityData.weather[0].icon}.png`} alt="icon.png"></img>
                                <label className="time-table-temp">-1°C</label>
                            </div>
                            <div className="time-table-item-bottom">
                                <label className="item-details-wind">5.1m/s</label>
                                <label className="item-details-humidity">86%</label>
                                <label className="item-details-precipitation">5mm</label>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default City;