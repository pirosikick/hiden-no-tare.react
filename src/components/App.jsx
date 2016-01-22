import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import Container from './Container';
import One from './One';
import Two from './Two';

const App = props => (
  <Router history={hashHistory}>
    <Route path="/" component={Container}>
      <Route path="one" component={One}/>
      <Route path="two" component={Two}/>
    </Route>
  </Router>
);

export default App;
