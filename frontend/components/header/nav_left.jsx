import React from "react"
import { Link } from 'react-router-dom'



export const NavLeft = (props) => {
    console.log(props)

    let sellAuth = < p onClick={() => props.openModal("signup")}>Sell</p>;
    if (props.currentUser != undefined) {
        sellAuth = <Link to={'/listings/new'}>Sell </Link>;
    }
    
    return (
        <div className="nav-left">
            <Link to={'/listings'}>Buy </Link>
            <p>Rent</p>
            {sellAuth}
        </div>
        )
  }