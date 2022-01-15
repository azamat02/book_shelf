import React, {useState} from "react";
import {Search as Search_icon} from "react-feather";

export default function Search() {
    const [searchValue, setSearchValue] = useState("")

    const handleSearchValueChange = (value: string) => {
        setSearchValue(value)
    }
    const toggleBorder = () => {
        let container = document.getElementsByClassName("search-container")
        container[0].classList.toggle("active_border")
    }

    return (
        <div id={"search"} className={"search-container"}>
            <Search_icon color={"#7d7d7d"}/>

            <input type="text"
                   value={searchValue}
                   onFocus={toggleBorder}
                   onBlur={toggleBorder}
                   onChange={event => handleSearchValueChange(event.target.value)}
                   placeholder={"Search"}/>

        </div>
    )
}