// import Navbar from './components/NavBar'
import React, { Component } from "react";
import PostList from "./components/PostList";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "./App.css";
import Hello from "./components/Hello";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={PostList} />
            {/* <Route path="/home" component={PostList} /> */}
            <Route path="/welcome" component={Hello} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
