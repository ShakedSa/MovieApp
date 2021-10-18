import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Movies } from './components/Movies';
import { Form } from './components/Form';
import { Error } from './components/Error';
import { SingleMovie } from './components/SingleMovie';

function App() {
  return (
    <Router>
      <Form />
      <Switch>
        <Route exact path='/'>
          <Movies />
        </Route>
        <Route path='/movie/:id'>
          <SingleMovie />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
