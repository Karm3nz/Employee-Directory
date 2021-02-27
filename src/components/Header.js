import React from "react";
import "../styles/header.css";

function Header() {
  return (
    <header className="header">
      <h1>Employee Directory</h1>
      <h6>Click on carrots to filter by heading or use the search box to narrow your results.</h6>
    </header>
  );
}

export default Header;
