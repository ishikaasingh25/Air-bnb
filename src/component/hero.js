import React from "react"
import hero from "../images/hero.png"
export default function Navbar(){
    return (
    <section className="hero_class">
        <img src={hero} className="hero_logo"/>
        <h1 className="hero_header">Online Experiences</h1>
        <p className="hero_para">Join unique interactive activities led by one-of-a-kind hosts
            all without leaving home.</p>
    </section>
    )
}