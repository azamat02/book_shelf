import React from "react";
import {Star} from "react-feather";

interface RatingProps {
    rating: number
    size: number
}

export default function Rating({rating, size=20} : RatingProps){

    let rendered_stars = [1,2,3,4,5].map(num=>{
        if (rating >= num) {
            return (
                <Star key={num} fill={"white"} color={"white"} size={size}/>
            )
        } else {
            return (
                <Star key={num} color={"white"} size={size}/>
            )
        }
    })

    return (
        <div className={"rating-container"}>
            {rendered_stars}
        </div>
    )
}