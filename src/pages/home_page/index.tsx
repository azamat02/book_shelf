import React from 'react'
import '../../styles/main.scss'
import Navbar from "../../components/navbar";
import HeaderCard from "../../components/header_card";
import BookCardsList from "../../components/book-cards-list";

export default function HomePage() {
    return (
        <div className={"home-page-container"}>
            <Navbar/>

            <HeaderCard/>

            <div className={"exclusive-title-block"}>
                <p>
                    Exclusive
                </p>

                <a href="#">See all</a>
            </div>

            <BookCardsList/>
        </div>
    )
}