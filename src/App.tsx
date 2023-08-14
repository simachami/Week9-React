//import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './component/Router';
//import Footer from './component/Footer';

function App() {
  return (
    <Router>
      <div className="App">
      <h1>Welcome to The Coolest Car Inventory Dashboard</h1>
        <AppRouter />
      </div>
    </Router>
  );
}

export default App;
