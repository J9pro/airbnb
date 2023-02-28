import React from 'react'
import logo from "../assets/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={logo} className="nav--logo" />
        </nav>
    )
}

//<img src="../assets/airbnb-logo.png" className="nav--logo" />