import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import BookService from "../../services/bookService";
import {ClipLoader} from "react-spinners";
import SearchResultBooksList from "../../components/search-result-books-list";
import {BookResponse} from "../book_page";

export default function SearchPage() {
    const [foundedBooks, setFoundedBooks] = useState<Array<BookResponse>>();
    const [searchParams, setSearchParams] = useSearchParams();
    const searchString = searchParams.get("search_string")
    const bookService = new BookService();

    useEffect(()=>{
        bookService.getBookByNameOrAuthor(searchString).then(res=>{
            setFoundedBooks(res)
        })
    }, [])


    if (!foundedBooks) {
        return (
            <div className={"spinner"}>
                <ClipLoader color={"#ff4f01"} size={60}/>
            </div>
        )
    }


    return (
        <div className={"search-page-container"}>
            <p className="title">
                Search results by "{searchString}"
            </p>
            <p className="subtitle">
                Found <span className="last_word"> {foundedBooks.length} </span>
            </p>

            <SearchResultBooksList books={foundedBooks}/>
        </div>
    )
}