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
        setFilter(searchFilter);
    }
    }

    let handleSearchClick = (event) =>{
        console.log("Item clicked!");
    }

    let changeSearchState = () =>{
        setIsSearching(false);
    }

    let handleSearchState = () =>{
        setIsSearching(true);
    }

    let resetFilter = () =>{
        setFilter([]);
    }

    let resultDisplay = () =>{
        if(!isSearching) {
            resetFilter();
        }
    }

    return (
        
        <section className="main">
        <div className="search">
            <div className="input">
                <input id="searchInput" type="text" placeholder={"Search pokedex"} onChange={filterSearch} onBlur={resultDisplay} ></input>{/*onBlur={resultDisplay}*/}
            </div>
            {/* { isSearching === true &&( */}
            <div className='results'>
                {filter.map((value, key) =>{
                    return <a onClick={handleSearchClick} onMouseOver={handleSearchState} onMouseOut={changeSearchState}>{value.name}</a>
                
                })}
                
            </div> {/*)}*/}

        </div>
        </section> 
    );
}

 