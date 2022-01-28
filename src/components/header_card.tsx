import React from "react";
import '../styles/main.scss'
// @ts-ignore
import reading_book_image from '../static/img/reading_book.png';

export default function HeaderCard() {

    return (
        <div className={"header-card-container"}>
            <div>
                <p className="title">
                    A large number of available books on our website for ordering!
                </p>

                <p className="text">
                    You can find any book according to your needs and interests, use the search.
                </p>
                <button className={"button-primary"}>All books</button>
            </div>

            <img src={reading_book_image} alt="reading book"/>
        </div>
    )
}