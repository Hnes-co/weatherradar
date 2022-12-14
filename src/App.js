
import './App.css';
import City from './components/city';
import axios from 'axios';
import { useRef, useState } from 'react';
import connection from './api-connection.json';
import searchIcon from './assets/search.svg';

const App = () => {

  const [searching, setSearching] = useState(false);
  const weatherData = useRef();
  const searchQuery = useRef();
  const errorMessage = useRef("");

  async function handleCitySearch(e) {
    e.preventDefault();
    const value = searchQuery.current.value;
    if(value === "") return;
    weatherData.current = undefined;
    errorMessage.current = "";
    setSearching(true);
    try {
      const current = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${connection.apiKey}&units=metric`);
      const forecast = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${connection.apiKey}&units=metric&cnt=8`);
      weatherData.current = { current: current.data, forecast: forecast.data };
    }
    catch(error) {
      console.log(error);
      errorMessage.current = "Hakuehtoa vastaavaa säätietoa ei löytynyt.";
    }
    searchQuery.current.value = "";
    setSearching(false);
  }

  return (
    <div className="App">
      <div className="header">
        <label>Säätutka</label>
      </div>
      <div className="main-container">
        <form className="search-bar" onSubmit={handleCitySearch}>
          <label className="search-label">Syötä hakuehto: </label>
          <div>
            <input className="search-input" type="text" ref={searchQuery} />
            <button className="search-button"><img src={searchIcon} alt="searchIcon" /></button>
          </div>
        </form>
        <label className="errormessage">{errorMessage.current}</label>
        <City weatherData={weatherData.current} searching={searching} />
      </div>
    </div>
  );
};

export default App;
