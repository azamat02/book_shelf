import React from "react";
import {Facebook, Instagram, Twitter, Youtube} from "react-feather";
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <div className={"footer"}>
            <p className={"title"}>
                Book shelf
            </p>
            <div>
                <p className="footer-links">
                    <a href="#">Main</a>
                    <a href="#search">Search</a>
                    <Link to="cart">Cart</Link>
                </p>
                <p className="footer-social-links">
                    <a href="#">
                        <Instagram/>
                        Instagram
                    </a>
                    <a href="#">
                        <Facebook/>
                        Facebook
                    </a>
                    <a href="#">
                        <Youtube/>
                        Youtube
                    </a>
                    <a href="#">
                        <Twitter/>
                        Twitter
                    </a>
                </p>
            </div>
        </div>
    )
}