
import './App.css';
import City from './components/city'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import axios from 'axios';
import {useState} from 'react';
import connection from './api-connection.json'

const App = () => {

  const options = [
    {
      value: 0,
      label: 'Kaikki kaupungit'
    },
    {
      value: 634963,
      label: 'Tampere'
    },
    {
      value: 655195,
      label: 'Jyväskylä'
    },
    {
      value: 650225,
      label: 'Kuopio'
    },
    {
      value: 660129,
      label: 'Espoo'
    },
  ];

  const [weatherData, setWeatherData] = useState([]);

  async function handleCitySelect(selection) {
    setWeatherData([]);
    if(selection.value === 0) {
      let tempArray = []
      for(let i = 1; i < options.length; i++) {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${options[i].value}&appid=${connection.apiKey}&units=metric&lang=fi`);
        tempArray.push(response.data)
      }
      setWeatherData(tempArray);
    }
    else {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${selection.value}&appid=${connection.apiKey}&units=metric&lang=fi`);
      setWeatherData([response.data]);
    }
  }
  
  return (
    <div className="App">
      <div className="header">
        <label>Säätutka</label>
      </div>
      <div className="main-container">
      <Dropdown 
        className="dropdown-city"
        options={options} 
        onChange={(selected) => handleCitySelect(selected)}
        placeholder="Valitse sijainti" />
        <div className="city-grid">
          {weatherData.map(e => (
            <City key={e.id} cityData={e}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
