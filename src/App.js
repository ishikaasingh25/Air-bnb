import React from "react"
import Navbar from "./component/navbar"
import Hero from "./component/hero"
import Card from "./component/card"
import Body from "./component/body"
import House from "./component/house"
import "./App.css"


export default function App() {
    return (
       <div>
        <Navbar/>
        <Hero/>
        <Card/>
        <Body/>
        <House/>
        
       </div>
    )
}