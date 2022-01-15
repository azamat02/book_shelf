import React from "react";
import {Facebook, Instagram, Twitter, Youtube} from "react-feather";
import {BsTelegram} from "react-icons/all";

export default function Footer() {
    return (
        <div className={"footer"}>
            <p className={"title"}>
                Book shelf
            </p>
            <div>
                <p className="footer-links">
                    <a href="#">Home</a>
                    <a href="#search">Search</a>
                    <a href="#">Categories</a>
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