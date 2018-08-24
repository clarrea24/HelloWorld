import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute,
        IndexLink } from 'react-router'
import Request from 'react-http-request';

export default class App extends Component {

  constructor (props){
    super(props);
    this.state = {city: 'London'};

  }

  handleChange(event) {
    this.setState({city: event.target.value})
  }



  render() {
    var auxUrl = "http://api.openweathermap.org/data/2.5/weather?q="+this.state.city+"&appid=5aa82f6c6baaebeb11c9d322e2cf6927";

    return (

      <div>
      <input type='text' name='city' value={this.state.city}
        onChange={this.handleChange.bind(this)}/>

      <p> THE WHEATHER IN {this.state.city} IS: </p>
      <Request
        url= {auxUrl}
        method='get'
        accept='application/json'
        verbose={true}
      >

        {
          ({error, result, loading}) => {
            if (loading) {
              return <div>loading...</div>;
            } else {
              var obj = JSON.stringify(result.body)
              var obj2 = JSON.parse(obj)
              console.log(obj2.name)

              if (!error){
                return <div>

                          { JSON.stringify(result.body.weather[0].main)
                      }</div>;
              }else{
                return <div>City does not exist!!!</div>;
              }

}
          }
        }
      </Request>
      </div>
    );
  }
}
