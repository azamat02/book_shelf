import axios from "axios";

export default class BookService{
    constructor() {
        this.apiBase = "http://localhost:8080/books"
    }

    async getBooks () {
        let res = await axios.get(`${this.apiBase}`).then(res=>{return res})
        return res.data;
    }
}