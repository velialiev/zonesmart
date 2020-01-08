import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import CategorySelectionPage from './pages/CategorySelectionPage/CategorySelectionPage';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/category-selection">
            <CategorySelectionPage />
          </Route>
          <Route path="/" exact>
            <Redirect to="/login"/>
          </Route>
          <Route path="*">
            <Redirect to="/login"/>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
