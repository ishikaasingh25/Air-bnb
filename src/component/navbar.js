import React from "react"
import logo from "../images/logo.png"
export default function Navbar(){
    return (
    <nav className="logo_class">
        <img src={logo} className="nav--logo"/>
    </nav>
    )
}