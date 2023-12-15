import React from 'react';
import '../styles/Searchbar.css'; //styles
import { useContext, useState } from 'react'; //react hooks
import { ListContext } from './ListContext';

/**
 * This @function SearchBar is a react functional
 * component that deals with accepting user input 
 * to serach for an item, and displaying the name's
 * of entries that have the input the user typed in
 * their name. 
 */

export default function SearchBar() {
    const [pokItems, setPokItems] = useContext(ListContext); //context object
    const [filter, setFilter] = useState([]); //used to filter data

    /**
     * This @function filterSearch() takes in a
     * @param {*} event that is used to retrieve the
     * input value from the user. If the value isn't empty
     * and it's included in any of the list items, the name of
     * the items it matches is added to the filter array to then
     * display to the user.
     */
    let filterSearch = (event) => {
        const wordDesired = event.target.value.toLowerCase(); //convert to lowercase
        if (wordDesired === "") { 
            //if user deletes all input
            resetFilter();
        }
        else {
            const searchFilter = pokItems.filter(value => {
                return value.name.toLowerCase().includes(wordDesired);
            })
            //set the filter array accordingly, even if no matches were found
            searchFilter.length === 0 ? setFilter([{ "name": "no results" }]) : setFilter(searchFilter);
        } 
    }

    /**
     * This @function resetFilter is a simple
     * function that resets the filter array to
     * be empty.
     */
    let resetFilter = () => {
        setFilter([]);
    }


    /*Here I'm returning the search bar which is really an input field with
    a container beneath it that displays the results with a white background */
    return (
        <section className="main">
            <div className="search">
                <div className="input">
                    <input id="searchInput" type="text" placeholder={"Search pokedex"} onChange={filterSearch} onBlur={resetFilter} ></input>
                </div>
                <div className='results'>
                    {filter.map((value, key) => {
                        return <a>{value.name}</a>

                    })}
                </div>
            </div>
        </section>
    );
}

