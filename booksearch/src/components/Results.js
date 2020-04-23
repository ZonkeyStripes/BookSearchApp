import React, { useState } from "react";
import API from "../bookApi";

const Results = (props) => {

    console.log(props)

    const [books, setBooks] = useState();
    const [searchVal, setSearchVal] = useState();

    const handleSearchVal = e => {
        setSearchVal(e.target.value);
    }
    return (
        <div className="results">
            <p>Results</p>
            <div>

            </div>
                    {props.books.map((elem, index) => {
                        console.log(elem.saleInfo.buyLink)
                        return (
                <div className="bookresults">
                    <a href={elem.saleInfo.buyLink} class="view-btn btn">View</a>
                {/* <button className="view-btn">View</button> */}
                <button className="save-btn">Save</button>
                        <ul key={index}>
                            <li>
                                <strong>Title:</strong>{elem.volumeInfo.title} <br />
                                <strong>Author(s):</strong> {elem.volumeInfo.authors}<br />
                                <strong>Description:</strong> {elem.volumeInfo.description}<br />
                                <strong>Image:</strong> <br />
                                <img src={elem.volumeInfo.imageLinks} alt="Picture of Book"></img> <br />
                                <strong>Link:</strong> {elem.saleInfo.buyLink} <br />

                            </li>
                        </ul>
                </div>
                        )
                    })}
        </div>
    )
}

export default Results;