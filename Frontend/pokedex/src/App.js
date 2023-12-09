import Navbar from './components/Navbar';
import CreatePok from './components/CreatePok';
import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <CreatePok />
    </React.Fragment>
  );
}

export default App;
