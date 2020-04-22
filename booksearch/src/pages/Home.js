import React from "react";
import Results from "../components/Results";

const Home = () => {
    return (
        <div className="container">

        <div className="container booksearch">
        <h3 className="booksearchhead">Book Search</h3> <br />

        <form action="/action_page.php">
            <label for="book">Book:</label> <br />
            <input type="text"></input>
        </form>
    </div>
    <Results />
        </div>
        )
}

export default Home;