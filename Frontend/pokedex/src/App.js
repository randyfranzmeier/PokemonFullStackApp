import Navbar from './components/Navbar';
import CreatePok from './components/CreatePok';
import PokView from './components/PokView';
import './App.css';
import React from 'react';
import {useState} from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {ListContext} from './components/ListContext';

function App() {
const [pokItems, setPokItems] = useState([{}]);
  return (
    <React.Fragment>
      <Navbar />
      <ListContext.Provider value={[pokItems, setPokItems]}>
      <CreatePok />
      <ErrorBoundary fallback={<h1>An error occured</h1>}>
      <PokView />
      </ErrorBoundary>
      </ListContext.Provider>
    </React.Fragment>
  );
}

export default App;
