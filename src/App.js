import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
          </Switch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;