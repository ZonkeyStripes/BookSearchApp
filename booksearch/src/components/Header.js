import React from "react";
import Logo from "../logo192.png";

function Header() {

    return (
        <div className="container">
            <div className="header">
                <h3><img src={Logo} className="ReactImage" alt="React"/> Google Book Search</h3>
                <h5>Search for and save your books of interest!</h5>
            </div>
        </div>
    )
}

export default Header;