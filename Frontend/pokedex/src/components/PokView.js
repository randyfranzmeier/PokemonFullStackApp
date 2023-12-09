import '../styles/PokView.css';
import { useState, useEffect } from 'react';
import PokEntry from './PokEntry';
export default function PokView() {
    //this is the parent component. I will have a list to store the entries, and then render them accordingly. When a new task 
    //is added or the page loads, the list will update.
    const [pokList, setPokList] = useState([]);


    let getEntries = async () => {
        let response = await fetch('http://localhost:3001/api/getAllEntries', {
            method: "GET",
            mode: "cors",
            headers: { "Content-Type": "Application/json" },
        }).catch(err => {
            console.error("an error occured: ", err);
            //display error message
        })

        if (response.ok) {
            let resObj = await response.json();
            let arr = Array.from(resObj);
            setPokList(arr);
            //load data onto page
        }
    }

    useEffect(() => { //this calls getEntries when the page is loaded
        getEntries();
    }, [])



    return (
        <div className="viewContainer">
            <h1>Pokemon character information:</h1>
            {pokList.map(x => {
                return <PokEntry key={x.name}
                    name={x.name}
                    number={x.number}
                    type={x.type}
                    description={x.description} />
            })}
        </div>
    );
}