import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Singleweather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:8000/api/weather/${this.props.match.params.id}/`)
      .then((res) => {
        const results = res.data;
        this.setState({results: [results]})
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container col-5">
        <div className="card bg-success mt-5">
          <div className="card-body">
          {
            this.state.results.map((data, idx)=> 
            <div className="List" key={idx }>
              <ul className="list-group">
                <li className="list-group-item">{data.name}</li>
                <li className="list-group-item">{data.time}</li>
                <li className="list-group-item">{data.description}</li>
                <li className="list-group-item">{data.day}</li>
                <li className="list-group-item">{data.location}</li>
                <li className="list-group-item">{data.temperature}</li>
              </ul>
            </div>
              
            )
          }
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Singleweather);
