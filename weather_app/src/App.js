import React from 'react';
import './App.css';
import WeatherIcon from './components/WeatherIcon'
import WeatherDetails from './components/WeatherDetails'




class App extends React.Component {
  state = {
    icon: '',
    time: 1,
    city: '',
    temperature: '',
    weatherCode: '',
    fetching: true
  }

  componentDidMount() {
    this.fetchIP()
  }

  fetchWeatherData=(city)=>{
    
  }




  return(
    <div>

    </div >
    );
  }
}

export default App;
