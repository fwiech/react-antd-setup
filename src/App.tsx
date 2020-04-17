import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

export const Home = () => <h1>Home Page</h1>;
export const Foo = () => <h1>Foo Page</h1>;
export const Bar = () => <h1>Bar Page</h1>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>&nbsp;- &nbsp;
              <Link to="/foo">Foo</Link>&nbsp;- &nbsp;
              <Link to="/bar">Bar</Link>
            </nav>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/foo" component={Foo} />
              <Route exact path="/bar" component={Bar} />
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
