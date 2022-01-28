import axios from "axios";

export default class BookService{
    constructor() {
        this.apiBase = "http://localhost:8080/books"
    }

    async getBooks () {
        let res = await axios.get(`${this.apiBase}`).then(res=>{return res})
        return res.data;
    }

    async getBookById (id) {
        let res = await axios.get(`${this.apiBase}/${id}`).then(res=>{return res})
        return res.data;
    }

    async getBookByNameOrAuthor (search_value) {
        let all_books = await this.getBooks()
        all_books = all_books.filter(book => {
            if (book.name.toLowerCase().includes(search_value.toLowerCase())) {
                return book
            }
            if (book.author.toLowerCase().includes(search_value.toLowerCase())) {
                return book
            }
        })

        return all_books
    }
}