import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "././navbar/Navbar";
import Home from "././pages/Home";
import Lesson from "././pages/Lesson";
import LessonList from "././pages/LessonList";
import Diaporama from "././pages/Diaporama";
import Footer from "././footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/lesson/:id">
              <Lesson />
            </Route>
            <Route path="/units">
              <LessonList />
            </Route>
            <Route path="/diaporama">
              <Diaporama />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>

          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
