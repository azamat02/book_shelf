import React from "react";
import CartBookItem, {CartBook} from "./cart-book-item";

interface CartBooksListProps {
    books: CartBook[]
}

export default function CartBooksList({books}: CartBooksListProps) {
    const renderedCartBooks = books.map((book:CartBook, index) => {
        return (
            <CartBookItem bookData={book} key={`cart-book-${index}`}/>
        )
    })

    return (
        <div className={"cart-books-list-container"}>
            <div>
                {renderedCartBooks}
            </div>
        </div>
    )

}