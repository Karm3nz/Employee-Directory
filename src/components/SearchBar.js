import React from "react";

function SearchBar({ onSearch, searchTerm, handleSortByName }) { // The two props coming down from the SearchBar Component
    return (
        <div className="form-group">
            <div className="sortByNameBtn">
                <button onClick={handleSortByName} type="button" className="btn btn-dark">Sort by Name</button>
            </div>
            <form>
                <input
                    value={searchTerm} // value attribute here keeps what you type in sync
                    onChange={onSearch} // the onChange is the event listening attribute that uses the onSearch prop method let state know there was a change
                    className="shadow pl-5 rounded w-full py-1"
                    type="text"
                    placeholder="search employee"/>
            </form>
        </div>
    )
}

export default SearchBar;