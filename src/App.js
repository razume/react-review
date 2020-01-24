import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import ColorSliderApp from './color-slider/ColorSliderApp';
import ThisWeekApp from './this-week/ThisWeekApp';
import InflectItApp from './inflect-it/InflectItApp';

export default function App() {
  return (
    <Router>
      <div>
        <nav id="nav-bar">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/colorSlider">
            Color Slider
          </Link>
          <Link className="link" to="/thisWeek">
            This Week
          </Link>
          <Link className="link" to="/inflectIt">
            Inflect It
          </Link>
        </nav>

        <Switch>
          <Route path="/colorSlider">
            <ColorSliderApp />
          </Route>
          <Route path="/thisWeek">
            <ThisWeekApp />
          </Route>
          <Route path="/inflectIt">
            <InflectItApp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
