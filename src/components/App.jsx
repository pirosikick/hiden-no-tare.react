import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import Container from './Container';
import One from './One';
import Two from './Two';

const App = props => (
  <Router history={browserHistory}>
    <Route path="/" component={Container}>
      <Route path="one" component={One}/>
      <Route path="two" component={Two}/>
    </Route>
  </Router>
);

export default App;
