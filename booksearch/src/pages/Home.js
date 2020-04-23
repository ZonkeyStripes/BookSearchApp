import React, { useState } from "react";
import Results from "../components/Results";
import axios from "axios";
import $ from "jquery";
import API from "../bookApi";


const Home = () => {

    const [loading, setLoading] = useState(0);
    const [books, setBooks] = useState([]);

    const searchForBooks = async (e) => {
        e.preventDefault();
        setLoading(1);
        const res = await

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${$("#search").val()}`);

        console.log("HERE");
        console.log($("#search").val());
    
    setBooks(res.data.items); //Setting books to whatever the API search returns
    }

    return (
        <div className="container">

        <div className="container booksearch">
        <h3 className="booksearchhead">Book Search</h3> <br />

        <form action="/action_page.php">
            <label for="book">Book:</label> <br />
            <input type="text" placeholder="Search Books" id="search"></input>
            <button className="btn btn-outline-secondary" onClick={searchForBooks}>Search</button>
        </form>
    </div>
    <Results books={books}/>
        </div>
        )
}

export default Home;