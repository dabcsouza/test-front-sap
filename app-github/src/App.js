import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import UserDetails from './Pages/UserDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/:userLogin" component={ UserDetails } />
    </Switch>
  );
}

export default App;
