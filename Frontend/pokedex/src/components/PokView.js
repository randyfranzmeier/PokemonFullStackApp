import '../styles/PokView.css';
import { useState, useEffect, useContext } from 'react';
import PokEntry from './PokEntry';
import {ListContext} from './ListContext';

export default function PokView() {
    //this is the parent component. I will have a list to store the entries, and then render them accordingly. When a new task 
    //is added or the page loads, the list will update.
    //const [pokList, setPokList] = useState([]);
    const [pokItems, setPokItems] = useContext(ListContext);


    let getEntries = async () => {
        let response = await fetch('http://localhost:3001/api/getAllEntries', {
            method: "GET",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
        }).catch(err => {
            console.error("an error occured: ", err);
            //display error message
        })
        if (typeof response !== 'undefined') {
            if (response.ok) {
                let resObj = await response.json();
                let arr = Array.from(resObj);
                setPokItems(arr);
                //load data onto page
            }
        }
        else {
            let errmsg = document.getElementById('errorOccured');
            errmsg.textContent = "An unexpected error occured loading data.";
            errmsg.style.color = "red";

        }
    }

    useEffect(() => { //this calls getEntries when the page is loaded
        getEntries();
    }, [])



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