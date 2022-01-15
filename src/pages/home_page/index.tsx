import React from 'react'
import '../../styles/main.scss'
import HeaderCard from "../../components/header_card";
import BookCardsList from "../../components/book-cards-list";

export default function HomePage() {
    return (
        <div>
            <div className={"home-page-container"}>
                <HeaderCard/>

                <div className={"exclusive-title-block"}>
                    <p>
                        Exclusive
                    </p>

                    <a href="#see_all">See all</a>
                </div>

                <BookCardsList/>
            </div>

        </div>
    )
}