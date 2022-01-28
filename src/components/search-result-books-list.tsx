import React from "react";
import SearchResultBookItem from "./search-result-book-item";
import {BookResponse} from "../pages/book_page";

interface SearchResultBooksListProps {
    books: Array<BookResponse>
}

export default function SearchResultBooksList({books}: SearchResultBooksListProps) {

    const renderedBooks = books.map((book: BookResponse) => {
        return (
            <SearchResultBookItem book={book}/>
        )
    })

    return (
        <div className={"search-result-books-list"}>
            {renderedBooks}
        </div>
    )
}