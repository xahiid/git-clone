import React, { Component } from "react";

export default class NavBar extends Component {
  state = {
    item: ""
  };

  handleChange = e => {
    var x = e.target.value;

    this.setState({
      item: x
    });
  };

    handleclick = (e) => {
        e.preventDefault();
        console.log(this.state.item )
       
    

   };
  
  render() {
   
    return (
      <div>
        <div className="topnav">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <div className="search-container">
            <form>
              <input
                type="text"
                placeholder="Search.."
                name="search"
                onChange={this.handleChange}
              ></input>
              <button onClick={this.handleclick}>Search</button>
            </form>
          </div>
        </div>

        
      </div>
    );
  }
}
