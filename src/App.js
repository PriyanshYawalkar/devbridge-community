// App.js
import React from 'react';
//import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About Us
          </NavLink>
          <NavLink to="/contact" activeClassName="active">
            Contact Us
          </NavLink>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={ContactUs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
