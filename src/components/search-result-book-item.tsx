import React, {useEffect, useState} from "react";
import {BookResponse} from "../pages/book_page";
import {CheckCircle, ShoppingCart, Star} from "react-feather";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addBookToCart, removeBookFromCart} from "../store/cartSlice";

interface SearchResultBookItemProps {
    book: BookResponse
}

export default function SearchResultBookItem({book}: SearchResultBookItemProps) {
    const navigator = useNavigate()
    // @ts-ignore
    const cart = useSelector(state => state.cart.books)
    const dispatch = useDispatch()
    const [addedToCart, setAddedToCart] = useState(false)

    useEffect(()=>{
        if (cart.find((cartBook: any) => cartBook.id === book.id)) {
            setAddedToCart(true)
        }
    }, [])

    const goToBookPage = (id: number) => {
        navigator(`/book/${id}`)
    }

    const addToCart = () => {
        setAddedToCart(true)
        dispatch(addBookToCart({bookData: book}))
    }

    const removeFromCart = () => {
        setAddedToCart(false)
        dispatch(removeBookFromCart({id: book.id}))
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

                <div className={"buttons"}>
                    <button className={"button-primary"} onClick={()=>goToBookPage(book.id)}>Read more</button>

                    <button className={`cart-button ${addedToCart ? 'cart-button-active' : ''}`} onClick={addedToCart ? removeFromCart : addToCart}>
                        <p>
                            {
                                addedToCart ? <CheckCircle color={`white`} size={25}/> : <ShoppingCart color={`#ff4f01`} size={25}/>
                            }
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}