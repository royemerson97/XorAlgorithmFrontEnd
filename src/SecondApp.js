import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Encrypt from "./views/Encrypt"
import Decrypt from "./views/Decrypt"

const App = () => (
  <Router>
    <div>
      <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <Link to="/" className="navbar-brand">XOR algorithm</Link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Link to="/Encrypt" className="nav-link">Encrypt</Link>
          </li>
          <li class="nav-item">
            <Link to="/Decrypt" className="nav-link">Decrypt</Link>
          </li>
        </ul>
      </div>
    </nav>
    <div className="container">
      <Route exact path="/Encrypt" component={Encrypt} />
      <Route path="/Decrypt" component={Decrypt} />
    </div>
    </div>
  </Router>
);

export default App;
