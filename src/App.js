import React, { Component } from 'react';
import Userpage from './components/Userpage';
import{
  Route,
  BrowserRouter as Router,
  BrowserRouter
} from 'react-router-dom';
import Logout from './components/Logout';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path='/index.html' component={Userpage}/>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
