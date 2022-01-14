import React from "react";
import {AiFillStar, BsStar} from "react-icons/all";
import {Star} from "react-feather";

interface RatingProps {
    rating: number
}

export default function Rating({rating} : RatingProps){

    let rendered_stars = [1,2,3,4,5].map(num=>{
        if (rating >= num) {
            return (
                <Star key={num} fill={"white"} color={"white"} size={20}/>
            )
        } else {
            return (
                <Star key={num} color={"white"} size={20}/>
            )
        }
    })

    return (
        <div className={"rating-container"}>
            {rendered_stars}
        </div>
    )
}