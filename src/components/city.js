import { handlePercipitation } from "../assets/percipitation";

const City = ({ weatherData, searching }) => {
  if(weatherData) {
    return (
      <div className="city-item">
        <div className="city-item-main">
          <div className="city-item-main-top">
            <div className="item-title">
              <div className="item-title-left">
                <label className="item-title-city">{weatherData.current.name}</label>
                <label className="item-description">{weatherData.current.weather[0].description}</label>
              </div>
              <div className="item-title-right">
                <img src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`} alt="icon.png"></img>
                <label className="item-title-temp"> {Math.round(weatherData.current.main.temp)} °C</label>
              </div>
            </div>
          </div>
          <div className="city-item-main-bottom">
            <div className="item-date">
              <label className="item-date-day">{new Date(weatherData.current.dt * 1000).toLocaleDateString([], { month: 'long', day: 'numeric' })}</label>
              <label className="item-date-time">{new Date(weatherData.current.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</label>
            </div>
            <div className="item-details">
              <label className="item-details-wind">Wind: {Math.round(weatherData.current.wind.speed * 10) / 10} m/s</label>
              <label className="item-details-humidity">Humidity: {weatherData.current.main.humidity} %</label>
              <label className="item-details-precipitation">{handlePercipitation('current', weatherData.current)}</label>
            </div>
          </div>
        </div>
        <div className="city-item-hourly-list">
          {weatherData.forecast.list.map(e => (
            <div className="hourly-list-item" key={e.dt}>
              <div className="hourly-list-item-container">
                <div className="hourly-list-item-top">
                  <label className="item-date-time">{new Date(e.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</label>
                  <img src={`http://openweathermap.org/img/wn/${e.weather[0].icon}.png`} alt="icon.png"></img>
                  <label className="time-table-temp">{Math.round(e.main.temp)} °C</label>
                </div>
                <div className="hourly-list-item-bottom">
                  <label className="item-details-wind">{Math.round(e.wind.speed * 10) / 10} m/s</label>
                  <label className="item-details-humidity">{e.main.humidity} %</label>
                  <label className="item-details-precipitation">{handlePercipitation('forecast', e)}</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  else if(searching) {
    return (
      <div className="loader"></div>
    );
  }
  else return null;
};

export default City;
