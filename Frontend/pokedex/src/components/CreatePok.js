import '../styles/CreatePok.css';
import { React } from 'react'; //using React fragment (displayed as <>)
import yellowpokemon from '../images/yellowpokemon.png'; //importing images
import pinkpokemon from '../images/pinkpokemon.png';
import { useRef, useContext } from 'react'; //importing usefull hooks
import { ListContext } from './ListContext'; //list context 

/**
 * this @function CreatePok() is a react functional 
 * component that accepts user input for a form and adds 
 * the data to the backend if no errors are encountered in 
 * the process. 
 * It @returns the UI for the form along with 2 pokemons (for aesthetics)
 */
export default function CreatePok() {
  let nameRef = useRef(null);
  let numRef = useRef(null);
  let typeRef = useRef(null);
  let desRef = useRef(null); //these hooks reference the input values name, number, type, and description, respectfully.
  const [pokItems, setPokItems] = useContext(ListContext); //importing list of pokedex objects 
  const numberInputError = document.getElementById("numberError");
  const nameInputError = document.getElementById("nameError"); //these are the parts of the page that will display input errors


  /**
   * this @function checkDuplicates() takes in a
   * @param {*} obj  (4 fields the user entered)
   * and displays an error message
   * if the value they entered already exists (name
   * or number) and @returns 
   * true or false depending on if a duplicate was found.
   */
  let checkDuplicates = (obj) => {
    let isDuplicate = false;
    pokItems.forEach(element => { //loop through list
      if (element.name === obj.name) { //if name matches
        nameInputError.textContent = "Name already taken.";
        nameInputError.style.color = "red";
        nameInputError.style.color = "red";
        isDuplicate = true;
      }
      else if (element.number === obj.number) {//if number matches
        numberInputError.textContent = "number already taken.";
        numberInputError.style.color = "red";
        numberInputError.style.fontWeight = "bold";
        isDuplicate = true;
      }
    });
    return isDuplicate;
  }

  /**
   * this @function addToList() takes in a
   * @param {*} event used to prevent the page from refreshing 
   * after form submission (if error occured), and posts the data entered
   * to the backend if no errors occured. Notice I'm catching errors if there is
   * an unsuccessful resonse from the backend
   */
  let addToList = async (event) => {
    //data object properties' are assigned the current value of the useRef object for user input
    let postData = {
      "name": nameRef.current.value,
      "number": numRef.current.value,
      "type": typeRef.current.value,
      "description": desRef.current.value
    };

    let isDuplicate = checkDuplicates(postData);
    if (!isDuplicate) { //only post if name and number are unique
      let response = await fetch('http://localhost:3001/api/addEntry', {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData) //serialize
      }).catch(error => console.log("an error occured:", error)); //handle error

      if (response.ok) {
        console.log("data saved successfully");
      }
      else {
        console.log("error saving data");
      }
    }
    else {
      event.preventDefault()//so page doesn't refresh
    }

  }


  /*I return the UI of the page with container classes for an organized page.
    The useRef hook is used to reference the user's inputted value in the form input field */
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
              <div className="nameContainer">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" ref={nameRef} required />
                <p id="nameError"></p><br /><br />
              </div>

              <div className="numberContainer">
                <label htmlFor="number">Number:</label>
                <input type="text" id="number" name="number" maxLength={3} ref={numRef} required />
                <p id="numberError"></p><br /><br />
              </div>
            </div>

            <div className="row2">
              <div className="typeContainer">
                <label htmlFor="type">Type:</label>
                <input type="text" id="type" name="type" ref={typeRef} required /><br /><br />
              </div>

              <div className="desContainer">
                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" ref={desRef} required></textarea><br /><br />
              </div>
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