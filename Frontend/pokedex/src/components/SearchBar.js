import React from 'react';
import '../styles/Searchbar.css';
import { useContext, useState } from 'react';
import { ListContext } from './ListContext';
// import SearchIcon from '@material-ui/icons/Search';
export default function SearchBar() {
    const [pokItems, setPokItems] = useContext(ListContext);
    const [filter, setFilter] = useState([]);
    const[isSearching, setIsSearching] = useState(false);

    let filterSearch = (event) =>{
        const wordDesired = event.target.value.toLowerCase(); 
        if(wordDesired === "") {
            setFilter([]);
        }
        else {
        const searchFilter = pokItems.filter(value =>{
            return value.name.toLowerCase().includes(wordDesired);
        })
        console.log("search filter length: " + searchFilter.length + "type:" + typeof searchFilter);
        searchFilter.length === 0? setFilter([{"name": "no results"}]): setFilter(searchFilter);
    }
    }

    
    let resetFilter = () =>{
        setFilter([]);
    }



    return (
        
        <section className="main">
        <div className="search">
            <div className="input">
                <input id="searchInput" type="text" placeholder={"Search pokedex"} onChange={filterSearch} onBlur={resetFilter} ></input>
            </div>
            <div className='results'>
                {filter.map((value, key) =>{
                    return <a>{value.name}</a>
                
                })}
                
            </div> 

        </div>
        </section> 
    );
}

 