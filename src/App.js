import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <h1>Hello me!</h1>
    <Navbar/>
    <Routes> 
      <Route exact path='/' />
    </Routes>
    </Router>
    </>
  );
}

export default App;
