import React, {useEffect, useState} from "react";
import BookService from "../services/bookService";
import BookCardItem from "./book-card-item";
import {ClipLoader} from "react-spinners";

export default function BookCardsList() {
    const [books, setBooks] = useState(null)
    const bookService = new BookService()

    useEffect(()=>{
        if (books === null) {
            bookService.getBooks().then(res=>{
                setBooks(res)
            }).catch(error=>{
                console.log(error)
                console.log("Internal error 500")
            })
        }
    }, [])

    if (books === []) {
        return (
            <p>Books not found</p>
        )
    }

    if (!books) {
        return (
            <div className={"spinner"}>
                <ClipLoader color={"#ff4f01"} size={60}/>
            </div>
        )
    }

    let renderedBooks
    if (books) {
        //@ts-ignore
        renderedBooks = books.map(item=>{
            return (
                <BookCardItem
                    key={`Book-${item.id}`}
                    rating={item.rating}
                    name={item.name}
                    author={item.author}
                    id={item.id}
                    imageSrc={item.imageSrc}
                    price={item.price}/>
            )
        })
    }

    return (
        <div className={"books-container"}>
            {renderedBooks}
        </div>
    )
}