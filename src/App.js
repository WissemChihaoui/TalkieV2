import React, { useState, useEffect } from 'react';
import './index.css'
import AuthLayout from './pages/auth/layout'
import { BrowserRouter as Router, Route, Redirect  } from 'react-router-dom';
import Home from './pages/home/Home';
import Chat from './pages/Chat/Chat';
import Loading from './Loading';
const AuthRedirect = () => {
  return <Redirect to="/auth/login" />;
};
const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulate a loading delay (e.g., 3 seconds)
  useEffect(() => {
    const delay = 5000; // 3 seconds
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after the delay
    }, delay);

    return () => {
      clearTimeout(timer); // Clear the timeout if the component unmounts
    };
  }, []);
  return (
    <React.Fragment>
    {loading ? (
      <Loading /> // Render your loading component here
    ) : (
      <Router>
        <Route path="/auth/" component={AuthLayout} />
        <Route exact path="/auth" component={AuthRedirect} />
        <Route exact path="/" component={Home} />
        <Route exact path="/messages" component={Chat} />
      </Router>
    )}
    </React.Fragment>
  );
};

export default App;
