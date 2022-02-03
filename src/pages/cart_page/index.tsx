import React from "react";
import CartBooksList from "../../components/cart-books-list";
import {useDispatch, useSelector} from "react-redux";
import {Trash} from "react-feather";
import {cleanCart} from "../../store/cartSlice";

export default function CartPage() {
    // @ts-ignore
    const cartBooks = useSelector(state => state.cart.books)
    const dispatch = useDispatch()

    const removeAllCart = () => {
        dispatch(cleanCart());
    }

    return (
        <div className={"cart-page-container"}>
            <p className="title">
                Cart
            </p>

            {
                cartBooks.length ? (
                    <button className={"clean-all-cart"} onClick={removeAllCart}>
                        <Trash/>
                        Clean all cart
                    </button>
                ) : ''
            }

            <CartBooksList books={cartBooks}/>
        </div>
    )
}