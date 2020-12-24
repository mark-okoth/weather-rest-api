import React, { Component } from 'react';
import axios from 'axios';
import '../App.css'
class Home extends Component {
  state = {
    weather: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/api/weather`)
      .then(res => {
        const weather = res.data;
        console.log(weather)
        this.setState({ weather: weather });
      })
  }

  render() {
    return (
    <div className="container col-6 mt-3">
        { this.state.weather.map(wea =>
        <div className="card mb-2">
        <ul>
          <li key={wea.id}>{wea.name}</li> 
          <li>{wea.day}</li>
          <li>{wea.location}</li>
          <li>{wea.temperature} <span>&#8451;</span> </li>
          <li>{wea.description}</li>
          <li>{wea.time}</li>
          <a className="btn btn-primary stretched-link btn-block mt-2" href={"http://localhost:8000/api/weather/"+wea.id}> view</a>
         </ul>
         </div>
        )}
      </div>
    )
  }
}

export default Home;