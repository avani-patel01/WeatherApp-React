
import React, { Component } from 'react'
import Search from './Search'

import axios from 'axios';
import Result from './Result';

 class Temp extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
            lat: '',
            lon: '',
            weatherData: null,
            city: '',
          };
      }
      changeHandler = (event) => {
        const name = event.target.name;
        if (name === 'city') {
          this.setState({
            city: event.target.value,
          });
        } else if (name === 'lat') {
          this.setState({
            lat: event.target.value,
          });
        } else if (name === 'lon') {
          this.setState({
            lon: event.target.value,
          });
        }
      };
      locationHandler = () => {
        this.setState({
            lat: '',
            lon: '',
            weatherData: '',
            city: '',
          });
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (res) => {
                    //console.log(res);
                   setTimeout(() => {
                    this.setState({
                        lat: res.coords.latitude,
                        lon: res.coords.longitude,
                    });
                    axios
                      .get(`http://api.openweathermap.org/data/2.5/weather?q=${this.setState.lat}&appid=72b971780557d7931113d1e8118af613`)
                      .then((result) => {
                        this.setState({
                          city: result.data.name,
                          weatherData: result.data,
                        })
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                   },500);
                },
                (error) => {
                    console.log(error);
                }
            )
        }else{
            console.log("Location Is Not Supported");
        }
      };
  render() {   
    return (
      <div className='container pt-4' style={{height:"500px"}}>
        <Search
            lat={this.state.lat}
            lon={this.state.lon}
            city={this.state.city}
            weatherData={this.state.weatherData}
            change={this.changeHandler}
            getLocation={this.locationHandler}
        ></Search>
        <Result/>
      </div>
    )
  }
}

export default Temp
