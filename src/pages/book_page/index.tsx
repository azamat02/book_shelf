import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import BookService from "../../services/bookService";
import {ClipLoader} from "react-spinners";
import {Star} from "react-feather";

interface BookResponse {
    id: number,
    name: string,
    author: string,
    rating: number,
    imageSrc: string,
    price: number
}

export default function BookPage() {
    const {bookId} = useParams()
    const [book, setBook] = useState<BookResponse>()
    const bookService = new BookService();

    useEffect(()=>{
        bookService.getBookById(bookId).then((res)=>{
            setBook(res)
            console.log(res)
        })
    }, [])

    if (!book) {
        return (
            <div className={"spinner"}>
                <ClipLoader color={"#ff4f01"} size={"60"}/>
            </div>
        )
    }

    console.log(bookId)

    return (
        <div className="book-page-container">
            <img src={book.imageSrc} alt="book_image" title={"book_image"}/>

            <div>

                <p className={"book-rating"}>
                    <Star fill={"#fff201"} color={"#fff201"} size={16}/>
                    {book.rating}
                </p>
                <p className={"book-title"}>{book.name}</p>
                <p className="book-author">{book.author}</p>
                <p className="book-price">{book.price}</p>

                <button className={"button-primary"} style={{width: "300px"}}>Купить за {book.price}</button>
                <br/>
                <button className={"button-secondary"} style={{width: "300px"}}>Добавить в корзину</button>

            </div>
        </div>
    )
}