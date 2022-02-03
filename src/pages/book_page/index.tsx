import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import BookService from "../../services/bookService";
import {ClipLoader} from "react-spinners";
import {CheckCircle, ChevronDown, ChevronUp, Star} from "react-feather";
import {useDispatch, useSelector} from "react-redux";
import {addBookToCart, removeBookFromCart} from "../../store/cartSlice";

export interface BookResponse {
    id: number,
    name: string,
    description: string,
    author: string,
    rating: number,
    imageSrc: string,
    price: number
}

export default function BookPage() {
    const {bookId} = useParams()
    const [book, setBook] = useState<BookResponse>()
    const bookService = new BookService();
    const dispatch = useDispatch()
    // @ts-ignore
    const cartOfBooks = useSelector(state => state.cart.books)
    const [addedToCart, setAddedToCart] = useState(false)
    const [extendedDescriptionOpen, setExtendedDescriptionOpen] = useState(false)

    const toggleShowDescription = () => {
        let p = document.getElementsByClassName("book-description")
        p[0].classList.toggle("paragraph-hidden")
        setExtendedDescriptionOpen(!extendedDescriptionOpen)
    }

    useEffect(()=>{
        bookService.getBookById(bookId).then((res)=>{
            setBook(res)
            if (cartOfBooks.find((book: BookResponse) => book.id === res.id)) {
                setAddedToCart(true)
            }
        })
    }, [])

    if (!book) {
        return (
            <div className={"spinner"}>
                <ClipLoader color={"#ff4f01"} size={"60"}/>
            </div>
        )
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
        <div className="book-page-container">
            <img src={book.imageSrc} alt="book_image" title={"book_image"}/>

            <div>

                <p className={"book-rating"}>
                    <Star fill={"#fff201"} color={"#fff201"} size={16}/>
                    {book.rating}
                </p>
                <p className={"book-title"}>{book.name}</p>
                <p className="book-author">{book.author}</p>
                <p className="book-description paragraph-hidden">{book.description}</p>

                <button className={"toggle-show-more-button"} onClick={toggleShowDescription}>
                    {
                        extendedDescriptionOpen ? (
                            <>
                                <ChevronUp color={"#9d3100"} size={20}/>
                                Hide all
                            </>
                        ) : (
                            <>
                                <ChevronDown color={"#9d3100"} size={20}/>
                                Show all
                            </>
                        )
                    }
                </button>

                <p className="book-price">{book.price}</p>

                <button className={"button-primary"} style={{width: "300px"}}>Buy for {book.price} ₸</button>
                <br/>

                {
                    addedToCart ?
                        <button onClick={removeFromCart}
                                className={"added-to-cart"} >
                            <CheckCircle/>
                            Added to cart
                        </button>
                        :
                        <button onClick={addToCart} className={"button-secondary"} style={{width: "300px"}}>
                            Add to cart
                        </button>
                }

            </div>
        </div>
    )
}