import React, { Component} from 'react';
import 'tachyons';
import {robots}from './Robots';
import Cardlist from './components/Cardlist.js';
import { render } from 'react-dom';

class App extends Component {
  constructor(){
    super()
    this.state ={
      robots: robots,
      searchfield:''
    }
  }
onSearchChange=(e)=>{
this.setState({searchfield : e.target.value})
 
}



 render(){
  const filteredRobots = this.state.robots.filter(robots=>{
    return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
  
  }) 
  return (
    <div className="tc">
      <h1 className='f1'>RoboFriends</h1>
      <div className="pa2">
        <input onChange={this.onSearchChange}
          className='pa3 ba b--green bg-lightest-blue'
          type="search"
          placeholder="search robofriends" />
      </div>
      <Cardlist robots={filteredRobots} />
    </div>
  );
 }

  }
 

export default App;
