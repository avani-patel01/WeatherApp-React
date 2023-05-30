import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Weather from './Weather';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import Temp from './Temp';

 class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Weather" element={<Weather />} />
          {/* <Route path='Weather' element={<Temp/>}/> */}
        </Routes>
      </Router>
    )
  }
}

export default App;
