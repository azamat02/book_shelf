import React from "react";
import {BookResponse} from "../pages/book_page";
import {ShoppingCart, Star} from "react-feather";
import {useNavigate} from "react-router-dom";

interface SearchResultBookItemProps {
    book: BookResponse
}

export default function SearchResultBookItem({book}: SearchResultBookItemProps) {
    const navigator = useNavigate()

    const goToBookPage = (id: number) => {
        navigator(`/book/${id}`)
    }

    return (
        <div className={"search-result-book-item-container"}>
            <img src={book.imageSrc} alt="book_image"/>

            <div className="book-info">
                <p className="book-name">
                    {book.name}
                </p>

                <p className="book-author">
                    {book.author}
                </p>

                <p className="book-rating">
                    <Star fill={"#ff4f01"} color={"#ff4f01"} size={20}/>
                    {book.rating}
                </p>

                <p className="book-description">
                    {book.description}
                </p>

                <button className={"button-primary"} onClick={()=>goToBookPage(book.id)}>Read more</button>

                <button className={"cart-button"}>
                    <p>
                        <ShoppingCart color={"#ff4f01"} size={25}/>
                    </p>
                </button>
            </div>
        </div>
    )
}