import React from "react";
import '../styles/main.scss'
// @ts-ignore
import reading_book_image from '../static/img/reading_book.png';

export default function HeaderCard() {

    return (
        <div className={"header-card-container"}>
            <div>
                <p className="title">
                    Discover tips, ideas, books lists and more for educators and families.
                </p>

                <p className="text">
                    Thoughtful created with engaging stories and fun characters that your family will love!
                </p>
                <button className={"button-primary"}>Start today</button>
            </div>

            <img src={reading_book_image} alt="reading book"/>
        </div>
    )
}