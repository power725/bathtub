import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Bathtub from './Bathtub';

import Bath from './Bath';

export default function App() {
  return (
    <div className="min-h-screen min-w-screen">
      <Router>
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/bath" component={Bath} />
          <Route path="/bathtub" component={Bathtub} />
          <Redirect to="/bathtub" />
        </Switch>
      </Router>
    </div>
  );
}