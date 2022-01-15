import React from "react";
import '../styles/main.scss'
import Rating from "./rating";

interface BookCardItemProps {
    id: number,
    name: string,
    author: string,
    price: number,
    rating: number,
    imageSrc: string
}

export default function BookCardItem({id, name, author, price, imageSrc, rating}: BookCardItemProps) {

    return (
        <div className={"book-card-container"} key={`Book-${id}`}>
            <div className={"book-image-container"}>
                <img src={imageSrc} alt="book_image"/>
            </div>
            <div>
                <p className={"book-name"} title={name}>{name}</p>
                <p className={"book-author"} title={author}>{author}</p>
                <p className={"book-price"} title={''+price}>{price}</p>
                <div className={"book-rating"}>
                    <Rating rating={rating}/>
                </div>
            </div>
        </div>
    )
}