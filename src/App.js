import './App.css';
import React, { Component } from 'react'
import Navbar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 5;
  country = "us";
  render() {
    return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path='/' element= { <News key="Home" pageSize={this.pageSize} country={this.country} category="general"/> }/>
          <Route exact path='/entertainment' element= { <News key="entertainment" pageSize={this.pageSize} country={this.country} category="entertainment"/> }/>
          <Route exact path='/business' element= { <News key="business" pageSize={this.pageSize} country={this.country} category="business"/> }/>
          <Route exact path='/health' element= { <News key="health" pageSize={this.pageSize} country={this.country} category="health"/> }/>
          <Route exact path='/science' element= { <News key="science" pageSize={this.pageSize} country={this.country} category="science"/> }/>
          <Route exact path='/sports' element= { <News key="sports" pageSize={this.pageSize} country={this.country} category="sports"/> }/>
          <Route exact path='/technology' element= { <News key="technology" pageSize={this.pageSize} country={this.country} category="technology"/> }/>
        </Routes>
      </BrowserRouter>
    )
  }
}