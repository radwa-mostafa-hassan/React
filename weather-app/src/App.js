import React from 'react';
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';
class App extends React.Component {
  state = {
    description: '',
    humidity: '',
    city: '',
    country: '',
    temp: ''
  }
  getWeather = async (e) => {
    e.preventDefault()
    const API_KEY = "e36ed364400282e43250b6c4c0274d44"
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    const data = await api.json()
    if (city && country) {
      this.setState({
        description: data.weather[0].description,
        humidity: data.main.humidity,
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp
      })
    }

  }
  render() {
    return (
      <div className="App">
        <Form getWeather={this.getWeather} />
        <br/>
        <Weather 
        description = {this.state.description}
        humidity = {this.state.humidity}
        city = {this.state.city}
        country = {this.state.country}
        temp = {this.state.temp}
        />
      </div>
    )
  }
}

export default App;
