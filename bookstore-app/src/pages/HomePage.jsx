import React from "react";
import {Link, link} from "react-router-dom";

import './style/HomePage.css';

const Homepage = () => {
    return(
        <div>
            <h1>Welcome to the Bookstore</h1>
            <p>This is the home page of the bookstore application</p>
            <p>Explore our collection of books and find your next read!</p>
            <Link> to="/books"</Link>
        </div>
    )
}

export default Homepage;