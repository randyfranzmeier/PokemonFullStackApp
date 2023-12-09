import '../styles/CreatePok.css';
import { React } from 'react';
import yellowpokemon from '../images/yellowpokemon.png';
import pinkpokemon from '../images/pinkpokemon.png';
import {useState, useRef} from 'react';

export default function CreatePok() {
  let nameRef = useRef(null);
  let numRef = useRef(null);
  let typeRef = useRef(null);
  let desRef = useRef(null);

  let  addToList = async () => {
    const postData = {"name":nameRef.current.value,
                      "number": numRef.current.value,
                      "type": typeRef.current.value,
                      "description": desRef.current.value}
    let response = await fetch('http://localhost:3001/api/addEntry', {
      method: "POST",
      mode: "cors",
      headers: {"Content-Type": "Application/json"},
      body: JSON.stringify(postData) //serialize
    }).catch(error =>console.log("an error occured:", error))
    if(response.ok) {
      alert("data saved successfully")
    }
    else {
      document.getElementById('errorMessage').textContent = "Unable to save data. Please refresh page and try again."
    }
  }



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
        <form id="pokedexForm" className="createPokContainer" onSubmit={addToList}>
          <div className="row1">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" ref={nameRef} required /><br /><br />

            <label htmlFor="number">Number:</label>
            <input type="text" id="number" name="number" ref={numRef} required /><br /><br />
          </div>

          <div className="row2">
            <label htmlFor="type">Type:</label>
            <input type="text" id="type" name="type" ref={typeRef} required /><br /><br />

            <label htmlFor="description">Description:</label><br />
            <textarea id="description" name="description" ref={desRef} required></textarea><br /><br />
          </div>
          <div className="submitButton">
            <input id="submit" type="submit" value="Add to Pokedex" />
          </div>
        </form>

        <div id="errorMessage"></div>
        <div className="image2container">
        <img id="image2" src={pinkpokemon}></img>
        </div>
        </section>
      </div>
    </>
  );
}