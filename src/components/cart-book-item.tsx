import React from "react";
import {Minus, Plus, X} from "react-feather";
import {useDispatch} from "react-redux";
import {removeBookFromCart, increaseQuantity, decreaseQuantity} from "../store/cartSlice";

export interface CartBook {
    id: number,
    name: string,
    description: string,
    author: string,
    rating: number,
    imageSrc: string,
    price: number,
    quantity: number
}

interface cartBookProps {
    bookData: CartBook
}

export default function CartBookItem({bookData}: cartBookProps) {
    const dispatch = useDispatch()

    const removeBook = () => {
        dispatch(removeBookFromCart({id: bookData.id}))
    }

    const increaseQ = () => {
        dispatch(increaseQuantity({id: bookData.id}))
    }

    const decreaseQ = () => {
        dispatch(decreaseQuantity({id: bookData.id}))
    }

    return (
        <div className={"cart-book-item-container"}>
            <img src={bookData.imageSrc} alt="book_image"/>

            <div>
                <p className="book-name">
                    {bookData.name}
                </p>

                <p className="book-price">
                    {bookData.quantity} X {bookData.price}
                </p>

                <button className={"button-link"} onClick={removeBook}>
                    <X/>

                    Remove from cart
                </button>

                <div className="quantity-change-button">
                    <button onClick={decreaseQ}>
                        <Minus/>
                    </button>
                    <p>
                        {bookData.quantity}
                    </p>
                    <button onClick={increaseQ}>
                        <Plus/>
                    </button>
                </div>
            </div>
        </div>
    )
}