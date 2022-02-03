import React from "react";
import CartBooksList from "../../components/cart-books-list";
import {useSelector} from "react-redux";

export default function CartPage() {
    // @ts-ignore
    const cartBooks = useSelector(state => state.cart.books)

    return (
        <div className={"cart-page-container"}>
            <p className="title">
                Cart
            </p>

            <CartBooksList books={cartBooks}/>
        </div>
    )
}