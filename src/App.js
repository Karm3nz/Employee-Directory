import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
// import Card from "./components/Card";

class App extends Component {
    // state = {
    //     friends
    // };

    render() {
        return (
            <div>
                <Header />
                <SearchBar />
            </div>
        );
    }
}
export default App;