import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contatti from './Contatti'
import Guida from './Guida'

function TopNav() {
  return (
    <Router>
      <div class="topnav">
        <b>
          <Link to="/">Home</Link>
        </b>
        <b>
          <Link to="/about">Chi siamo</Link>
        </b>
        <b>
          <Link to="/guida">Guide</Link>
          <b>
            <Link to="/contatti" style={{ float: "right" }}>
              Contatti
            </Link>
          </b>
        </b>
      </div>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path='/contatti' component={Contatti}/>
      <Route path='/guida' component={Guida}/>
    </Router>
  );
}
export default TopNav;
