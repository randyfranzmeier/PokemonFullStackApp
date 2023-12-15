import '../styles/PokView.css'; //styles
import { useEffect, useContext } from 'react'; //helpful react hooks
import PokEntry from './PokEntry'; //child component to map data to
import { ListContext } from './ListContext'; //shared list context object

/**
 * This @function PokView is a react functional 
 * component that deals with loading the list of 
 * data (JSON objects) on the screen. After I fetch
 * the data I map each individual object within the 
 * list to the PokEntry component
 * @returns 
 */

export default function PokView() {
    //list to assign pokedex entries to 
    const [pokItems, setPokItems] = useContext(ListContext);

    /**
     * this @function getEntries() is an asynchroneous
     * function that calls the backend requesting data.
     * Upon successful retrieval of the data, the context object 
     * storing the list items is updated.
     */

    let getEntries = async () => {
        let response = await fetch('http://localhost:3001/api/getAllEntries', {
            method: "GET",
            mode: "cors", //for cross origin resource sharing
            headers: { "Content-Type": "application/json" },
        }).catch(err => {
            console.error("an error occured: ", err); //display error message
        })
        if (typeof response !== 'undefined') {
            if (response.ok) {
                let resObj = await response.json();
                let arr = Array.from(resObj);
                setPokItems(arr); //load data onto page
            }
        }
        else { //display error message so user knows if something went wrong
            let errmsg = document.getElementById('errorOccured');
            errmsg.textContent = "An unexpected error occured loading data.";
            errmsg.style.color = "red";

        }
    }

    /**
     * this @function useEffect() is a react
     * hook that gets instantiated everytime 
     * the page changes. However, I included 
     * an empty dependency array so It'll only 
     * trigger once. I call the getEntries function
     * so the user can see all the entries.
     */

    useEffect(() => {
        getEntries();
    }, [])

    /* Here I'm returning a collection of mapped
    objects and calling the child component to do
    all the styling.  */

    return (
        <div className="viewContainer">
            <h1>Pokemon character information:</h1>
            <h3 id="errorOccured"></h3>
            {pokItems.map(x => {
                return <PokEntry key={x.name}
                    name={x.name}
                    number={x.number}
                    type={x.type}
                    description={x.description} />
            })}
        </div>
    );
}