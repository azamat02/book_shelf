import React from "react";
import '../styles/main.scss'
import Search from "./search";
import {ShoppingCart} from "react-feather";
import {Link, useNavigate} from "react-router-dom";

export default function Navbar() {
    const navigator = useNavigate();

    return (
        <div className={"navbar-container"}>
            <Link to={"/"}>
                <p>Book Shelf</p>
            </Link>

            <Search/>

            <button onClick={()=>{navigator("/cart")}}>
                <ShoppingCart color={"#ff4f01"}/>
                Cart
            </button>
        </div>
    )
}