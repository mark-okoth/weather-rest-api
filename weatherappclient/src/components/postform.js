import React, { Component } from "react";
import axios from "axios";
import {Redirect} from 'react-router-dom'
class PostWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      day: "",
      location: "",
      time: "",
      description: "",
      temperature: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
  
    axios
      .post(`http://localhost:8000/api/weather/`, {
        name: this.state.name,
        location: this.state.location,
        temperature: this.state.temperature,
        time: this.state.time,
        day: this.state.day,
        description: this.state.description,
        })
      .then((res) => {
        console.log(res);
        console.log(res.data);
       this.setState({
        name: "",
        day: "",
        location: "",
        time: "",
        description: "",
        temperature: "",
       })
        
      }).catch(err =>{
        if(err.response){
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
        }else if(err.request){
          console.log(err.request)
        }else{
          console.log( 'Error', err.message)
        }
      })  
  }
  render() {
    return (
      <div className="post-form">
        <div className="container col-6 mt-3">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.name}
              name="name"
              className="form-control mb-2"
              onChange={this.handleChange}
            />
            <input
              type="date"
              value={this.state.day}
              name="day"
              className="form-control mb-2"
              onChange={this.handleChange}
            />
            <input
              type="text"
              value={this.state.location}
              name="location"
              className="form-control mb-2"
              onChange={this.handleChange}
            />
            <input
              type="time"
              value={this.state.time}
              name="time"
              className="form-control mb-2"
              onChange={this.handleChange}
            />
            <input
              type="text"
              value={this.state.description}
              name="description"
              className="form-control mb-2"
              onChange={this.handleChange}
            />
            <input
              type="number"
              value={this.state.temperature}
              name="temperature"
              className="form-control mb-2"
              onChange={this.handleChange}
            />
            <button className="btn btn-block mt-3">Post</button>
          </form>
        </div>
      </div>
    );
  }
}

export default PostWeather;
