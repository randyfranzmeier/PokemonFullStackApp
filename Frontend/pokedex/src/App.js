import Navbar from './components/Navbar';
import CreatePok from './components/CreatePok';
import PokView from './components/PokView';
import './App.css';
import React from 'react';
import {ErrorBoundary} from 'react-error-boundary';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <CreatePok />
      <ErrorBoundary fallback={<h1>An error occured</h1>}>
      <PokView />
      </ErrorBoundary>
    </React.Fragment>
  );
}

export default App;
