import './App.css';
import React, { Component } from 'react'
import Navbar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 10;
  country = "us";
  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress:0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
      <BrowserRouter>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
        
      />
      <Navbar/>
        <Routes>
          <Route exact path='/' element= { <News setProgress={this.setProgress} apiKey={this.apiKey}  key="Home" pageSize={this.pageSize} country={this.country} category="general"/> }/>
          <Route exact path='/entertainment' element= { <News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={this.pageSize} country={this.country} category="entertainment"/> }/>
          <Route exact path='/business' element= { <News setProgress={this.setProgress} apiKey={this.apiKey}  key="business" pageSize={this.pageSize} country={this.country} category="business"/> }/>
          <Route exact path='/health' element= { <News setProgress={this.setProgress} apiKey={this.apiKey}  key="health" pageSize={this.pageSize} country={this.country} category="health"/> }/>
          <Route exact path='/science' element= { <News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize={this.pageSize} country={this.country} category="science"/> }/>
          <Route exact path='/sports' element= { <News setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" pageSize={this.pageSize} country={this.country} category="sports"/> }/>
          <Route exact path='/technology' element= { <News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={this.pageSize} country={this.country} category="technology"/> }/>
        </Routes>
      </BrowserRouter>
    )
  }
}