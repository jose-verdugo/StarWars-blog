
import React from "react";
import { Link } from "react-router-dom";


export const Details = () =>{
    return(
        <>
        <h1>Details</h1>
        <Link to={`/`}>
        <button >Go back</button>
      </Link>
        </>
    )
}