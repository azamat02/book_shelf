import React, {useEffect, useState} from "react";
import '../styles/main.scss'
import Rating from "./rating";
import {useNavigate} from "react-router-dom";
import {CheckCircle, ShoppingCart} from "react-feather";
import {addBookToCart, removeBookFromCart} from "../store/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import {BookResponse} from "../pages/book_page";
import {log} from "util";

interface BookCardItemProps {
    id: number,
    name: string,
    author: string,
    price: number,
    rating: number,
    imageSrc: string
}

export default function BookCardItem({id, name, author, price, imageSrc, rating}: BookCardItemProps) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // @ts-ignore
    const cartOfBooks = useSelector(state => state.cart.books)
    const [addedToCart, setAddedToCart] = useState(false)

    useEffect(()=>{
        if (cartOfBooks.find((book: BookResponse) => book.id === id)) {
            setAddedToCart(true)
        }
    },[])

    // @ts-ignore
    const forwardToBookPage = (event,id) => {
        navigate(`/book/${id}`)
    }

    const addToCart = (event: any) => {
        event.stopPropagation();
        setAddedToCart(true)
        dispatch(addBookToCart({bookData: {id, name, author, rating, price, imageSrc}}))
    }

    const removeFromCart = (event: any) => {
        event.stopPropagation();
        setAddedToCart(false)
        dispatch(removeBookFromCart({id}))
    }

    return (
        <div onClick={(event)=>forwardToBookPage(event, id)} className={"book-card-container"} key={`Book-${id}`}>
            <div className={"book-image-container"}>
                <img src={imageSrc} alt="book_image"/>
            </div>
            <div>
                <p className={"book-name"} title={name}>{name}</p>
                <p className={"book-author"} title={author}>{author}</p>
                <p className={"book-price"} title={''+price}>{price}</p>
                <div className={"book-rating"}>
                    <Rating rating={rating} size={15}/>
                </div>
                <button onClick={addedToCart ? (event) => removeFromCart(event) :
                                                (event) => addToCart(event)}
                        className={`add-to-cart-button`}

                        style={addedToCart ? {color: 'white', background: '#FF4F01FF'} : {}}>
                    {
                        addedToCart ? <CheckCircle id={"svg"}/> : <ShoppingCart id={"svg"}/>
                    }
                </button>
            </div>
        </div>
    )
}