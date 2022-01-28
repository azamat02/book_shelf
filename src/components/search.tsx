import React, {useState} from "react";
import {Search as Search_icon} from "react-feather";

export default function Search() {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchValueChange = (value: string) => {
        setSearchValue(value)
    }
    const toggleBorder = () => {
        let container = document.getElementsByClassName("search-container")
        container[0].classList.toggle("active_border")
    }
    const handleEnter = (event: any) => {
        // If pressed Enter button
        if (event.keyCode === 13) {
            event.preventDefault();

            window.location.href = `/search_page?search_string=${searchValue}`
        }
    }

    return (
        <div id={"search"} className={"search-container"}>
            <Search_icon color={"#7d7d7d"}/>

            <input type="text"
                   onKeyUp={(event)=>handleEnter(event)}
                   value={searchValue}
                   onFocus={toggleBorder}
                   onBlur={toggleBorder}
                   onChange={event => handleSearchValueChange(event.target.value)}
                   placeholder={"Search books"}/>

            {
                searchValue !== '' ? (
                        <button onClick={()=>{
                            window.location.href = `/search_page?search_string=${searchValue}`
                        }} className={"button"}>
                            Find
                        </button>
                ) : ''
            }
        </div>
    )
}