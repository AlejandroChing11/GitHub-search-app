import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import UserDetailsExtended from './components/UserDetailsExtended';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/user/:login"
          element={<UserDetailsExtended />}
        />
      </Routes>
    </Router>
  );
}

export default App;
