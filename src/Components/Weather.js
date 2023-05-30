import React, { Component } from 'react'
import Search from './Search'
import Result from './Result'
import axios from 'axios'
import Loader from './Loader'
import Recent from './Recent'

class Weather extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lat: "",
      lon: "",
      weatherData: null,
      city: "",
      loading: false,
      recent: [],
    }
  }
  changeHandler = (event) => {
    let name = event.target.name;
    if (name === 'city') {
      this.setState({
        city: event.target.value
      })
    }
    else if (name === 'lat') {
      this.setState({
        lat: event.target.value
      })
    }
    else if (name === 'lon') {
      this.setState({
        lon: event.target.value
      })
    }
  }

  searchHandler = () => {
    if (!this.state.lat || !this.state.lon) {
      console.log("Latitude or longitude is undefined");
      return;
    }

    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=72b971780557d7931113d1e8118af613`)
      .then((result) => {
        this.setState({
          city: result.data.name,
          weatherData: result.data,
          loading: false
        }, () => {
          this.addRecentData();
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false })
      });
  }

  recentSearchHandler = (lat, lon) => {
    this.setState({ weatherData: null }, () => {
      this.setState({ lat, lon }, () => {
        axios
          .get(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=72b971780557d7931113d1e8118af613`)
          .then((result) => {
            this.setState({
              city: result.data.name,
              weatherData: result.data,
            })
          })
          .catch((error) => {
            console.log(error);
          });
      })
    })
  }

  locationHandler = () => {
    this.setState({
      lat: "",
      lon: "",
      weatherData: "",
      city: "",
      loading: true
    })

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (res) => {
          setTimeout(() => {
            const { latitude: lat, longitude: lon } = res.coords;
            axios
              .get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=72b971780557d7931113d1e8118af613`)
              .then((result) => {
                this.setState({
                  city: result.data.name,
                  weatherData: result.data,
                  loading: false
                }, () => {
                  this.addRecentData();
                });
              })
              .catch((error) => {
                console.log(error);
                this.setState({ loading: false })
              });
            this.setState({
              lat,
              lon,
            });
          }, 500);

        },
        (error) => {
          console.log(error);
          this.setState({ loading: false })
        }
      )
    }
    else {
      console.log("Location Is Not Supported");
      this.setState({ loading: false })
    }

  }

  addRecentData = () => {
    let recent = this.state.recent
    recent.push({
      city: this.state.city,
      lat: this.state.lat,
      lon: this.state.lon
    })
    this.setState({ recent },()=>{
      window.localStorage.setItem( "recent" , JSON.stringify(this.state.recent));
    });
  };

  componentDidMount(){
    const data = window.localStorage.getItem("recent");
    this.setState({recent:JSON.parse(data)});
  }


  render() {
    return (
      <div className='container pt-4' style={{ height: "500px" }}>
        {this.state.loading && <Loader />}
        <Search
          lat={this.state.lat}
          lon={this.state.lon}
          weatherData={this.state.weatherData}
          city={this.state.city}
          change={this.changeHandler}
          search={this.searchHandler}
          location={this.locationHandler}
        ></Search>
        <Recent recent={this.state.recent}  reSearch={this.recentSearchHandler}/>
        <Result weatherData={this.state.weatherData}></Result>
      </div>
    )
  }
}

export default Weather
