import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import Game from './pages/game';
import Login from './pages/login';
import readSessionCookie from './helpers/readSessionCookie';
import { setGroupId } from './actions/game';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const email = readSessionCookie();
    if (email) {
      axios.post('https://us-central1-okonomisimulator.cloudfunctions.net/isRegistered', { email })
        .then((response) => {
          setAuthenticated(response.data.registered);
          dispatch(setGroupId(response.data.groupId));
        });
    }
  });

  return (
    <Router>
      <Switch>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          {authenticated
            ? <Game />
            : <Login />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
