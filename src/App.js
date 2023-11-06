import React from 'react';
import './index.css'
import AuthLayout from './pages/auth/layout'
import { BrowserRouter as Router, Route, Redirect  } from 'react-router-dom';
import Home from './pages/home/Home';
import Chat from './pages/home/Chat';
const AuthRedirect = () => {
  return <Redirect to="/auth/login" />;
};
const App = () => {
  return (
    <Router>
      <Route path="/auth/" component={AuthLayout} />
      <Route exact path="/auth" component={AuthRedirect} />
      <Route exact path="/" component={Home} />
      <Route exact path="/messages" component={Chat} />
    </Router>
  );
};

export default App;
