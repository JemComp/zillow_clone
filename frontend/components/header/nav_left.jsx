import React from "react"
import { Link } from 'react-router-dom'

export const NavLeft = (props) => {
    return (
        <div className="nav-left">
            <Link to={'/listings'}>Buy </Link>
            <p>Rent</p>
            <p>Sell</p>
        </div>
        )
  }