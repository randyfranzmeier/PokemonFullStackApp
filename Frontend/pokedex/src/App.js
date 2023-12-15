//import all of the components to be rendered on the page
import Navbar from './components/Navbar';
import CreatePok from './components/CreatePok';
import PokView from './components/PokView';
import SearchBar from './components/SearchBar';
//import styles
import './App.css';
//import react "helper" tools/hooks
import React from 'react';
import {useState} from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {ListContext} from './components/ListContext';

/**
 * this @function App() is the parent component.
 * It simply takes in all the child component and
 * @returns a page with all the puzzle pieces (components)
 * linked together to make a web page. I'm using a use state 
 * hook to allow components to change the state of the 
 * pokItems array (components wrapped in the useContext provider).
 */
function App() {
const [pokItems, setPokItems] = useState([{}]);
  return (
    <React.Fragment> {/*this tag is the better alternative to div.
     It helps maintain the styling of the page */}
      <Navbar />
      <ListContext.Provider value={[pokItems, setPokItems]}>
      <SearchBar />
      <CreatePok /> 
      <ErrorBoundary fallback={<h1>An error occured</h1>}>
      <PokView />
      </ErrorBoundary>{/*This error boundary will be displayed if
       something gets rendered incorrectly. It will replace the PokView componenent
       in the case that something goes wrong */}
      </ListContext.Provider>
    </React.Fragment>
  );
}

export default App;
