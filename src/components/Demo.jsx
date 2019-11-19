import React, { Component } from 'react'
import Hello from './Hello'
export default class Demo extends Component {
    render() {
        return (
          <div>
            <Router>
              <Switch>
                <Route exact path="/welcome" component={Hello} />
              </Switch>
            </Router>
          </div>
        );
    }
}
