import React from "react";
import CartBookItem, {CartBook} from "./cart-book-item";
import {Link} from "react-router-dom";

interface CartBooksListProps {
    books: CartBook[]
}

export default function CartBooksList({books}: CartBooksListProps) {
    const renderedCartBooks = books.map((book:CartBook, index) => {
        return (
            <CartBookItem bookData={book} key={`cart-book-${index}`}/>
        )
    })

    if (!books.length) {
        return (
            <p style={{margin: "50px 20px"}}>
                <i>
                    There are no books added to your cart, you can check available books <Link to="/#all-books">here</Link>
                </i>
            </p>
        )
    }

    return (
        <div className={"cart-books-list-container"}>
            <div>
                {renderedCartBooks}
            </div>
        </div>
    )

}