import React, {Component} from 'react';
import './App.css';
import Home from './Home';
import Spots from './Spots';
import Header from './Header';
import Community from './Community';
import Google from './Google.js';
import Footer from '../src/Footer.js';
import fire from './config/firebaseConfig.js';
import Confirm from './confirm.js';
import Account from './accountPage';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class App extends Component {

  render() {

    return(


      <div id="header">
      <div>
      <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/spots" component={Spots} />
      <Route path="/community" component={Community} />
      <Route path="/accountPage" componenent={Account}/>
      </Router>
      </div>
      <div>
      </div>


      <Footer />


      </div>





    )
  }
}


export default App;
