import React, { useState } from 'react';
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import SearchBar from "./components/SearchBar";
import EmployeeCardList from "./components/EmployeeCardList";
import employees from "./data/employees.json";

function App() {
    const [ searchTerm, setSearchTerm ] = useState("");
    const [ sorted, setSorted] = useState(false);
    const [ data, setEmployees ] = useState(employees);

    function handleSearchTerm(event)  {
        setSearchTerm(event.target.value)
    }

    function handleSortByName() {
        // sort array ascending or descending 
        if (!sorted) {
            setEmployees(data.sort((a, b) => (a.name > b.name) ? 1 : -1));
            setSorted(true);
        } else {
            setEmployees(data.sort((a, b) => (a.name > b.name) ? -1 : 1));
            setSorted(false);
        }
    }

    // the filteredEmployees variable only stores employee names that start with with the matching string you type
    const filteredEmployees = data.filter(employee => employee.name.toLowerCase().startsWith(searchTerm.toLowerCase()));
    return (
        <div>
            <Header/>
            <Wrapper>
                <SearchBar
                    onSearch={handleSearchTerm}
                    searchTerm={searchTerm}
                    handleSortByName={handleSortByName}
                />
                {/* the employees array gets the filteredEmployees data via the data prop */}
                <EmployeeCardList data={filteredEmployees}/>
            </Wrapper>
        </div>
    )
}

export default App;
