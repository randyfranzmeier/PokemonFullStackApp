import '../styles/CreatePok.css';
import { React } from 'react';
import yellowpokemon from '../images/yellowpokemon.png';
import pinkpokemon from '../images/pinkpokemon.png';

export default function CreatePok() {

  return (
    <>
      <div className="mainContainer">
        <div className="pokTitle">
          <h2>Enter information below to add your favorite pokemon to the list of entries!</h2>
        </div>
        <section className="rowWrapper">
        <div className="image1container">
           <img id="image1" src={yellowpokemon}></img>
        </div>
        <form id="pokedexForm" className="createPokContainer">
          <div className="row1">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required /><br /><br />

            <label for="number">Number:</label>
            <input type="text" id="number" name="number" required /><br /><br />
          </div>

          <div className="row2">
            <label for="type">Type:</label>
            <input type="text" id="type" name="type" required /><br /><br />

            <label for="description">Description:</label><br />
            <textarea id="description" name="description" required></textarea><br /><br />
          </div>
          <div className="submitButton">
            <input id="submit" type="submit" value="Add to Pokedex" />
          </div>
        </form>

        <div id="pokedexEntries"></div>
        <div className="image2container">
        <img id="image2" src={pinkpokemon}></img>
        </div>
        </section>
      </div>
    </>
  );
}