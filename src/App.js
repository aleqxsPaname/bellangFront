import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "././navbar/Navbar";
import Home from "././pages/Home";
import Lesson from "././pages/Lesson";
import Footer from "././footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/lesson">
              <Lesson />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            {/* <Route path="/dashboard">
            <Dashboard />
          </Route> */}
          </Switch>

          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
