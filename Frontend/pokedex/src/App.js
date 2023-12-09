import Navbar from './components/Navbar';
import CreatePok from './components/CreatePok';
import PokView from './components/PokView';
import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <CreatePok />
      <PokView />
    </React.Fragment>
  );
}

export default App;
