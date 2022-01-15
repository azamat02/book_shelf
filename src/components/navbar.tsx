import React from "react";
import '../styles/main.scss'
import Search from "./search";
import {Grid} from "react-feather";
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div className={"navbar-container"}>
            <Link to={"/"}>
                <p>Book Shelf</p>
            </Link>

            <Search/>

            <button>
                <Grid color={"#ff4f01"}/>
                Categories
            </button>
        </div>
    )
}