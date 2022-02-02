import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    books: []
}

if (localStorage.getItem("books")) {
    initialState.books = JSON.parse(localStorage.getItem("books"))
}
const updateLocalStorage = (bookArray) => {
    localStorage.setItem("books", JSON.stringify(bookArray))
}

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: initialState,
    reducers: {
        addBookToCart(state, action) {
            if (state.books.find(book => action.payload.bookData.id === book.id)) {
                state.books.find(book => action.payload.bookData.id === book.id).quantity+=1
            } else {
                state.books.push({
                    ...action.payload.bookData,
                    quantity: 1,
                })
            }
            updateLocalStorage(state.books)
        },
        increaseQuantity(state, action) {
            state.books.find(book => {
                if (action.payload.id === book.id) {
                    book.quantity +=1;
                }
            })
            updateLocalStorage(state.books)
        },
        decreaseQuantity(state, action) {
            state.books.find(book => {
                if (action.payload.id === book.id) {
                    if(book.quantity === 1) {
                        state.books = state.books.filter(book => book.id !== action.payload.id)
                    } else {
                        book.quantity -=1;
                    }
                }
            })
            updateLocalStorage(state.books)
        },
        removeBookFromCart(state, action) {
            state.books = state.books.filter(book => book.id !== action.payload.id)
            updateLocalStorage(state.books)
        },
        cleanCart(state) {
            state.books = []
            updateLocalStorage(state.books)
        },
    }
})

export const {increaseQuantity, decreaseQuantity, addBookToCart, removeBookFromCart, cleanCart} = cartSlice.actions;

export default cartSlice.reducer;