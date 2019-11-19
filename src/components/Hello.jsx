import React, { Component } from "react";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
export default class Hello extends Component {
  render() {
    return (
    
        <div className="container1">
          
            <div className="header1">Welcome</div>

            <div className="sidebar">sidebar</div>
            <div className="main">main</div>
            <div className="footer">footer</div>
          

     </div>
    );
  }
}
