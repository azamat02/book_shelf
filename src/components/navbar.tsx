import React from "react";
import '../styles/main.scss'
import Search from "./search";
import {Grid} from "react-feather";

export default function Navbar() {
    return (
        <div className={"navbar-container"}>
            <p>Book Shelf</p>

            <Search/>

            <button>
                <Grid color={"#ff4f01"}/>
                Categories
            </button>
        </div>
    )
}