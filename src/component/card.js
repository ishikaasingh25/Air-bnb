import React from "react"
import image1 from "../images/image1.png"
import lady from "../images/lady.png"
import image3 from "../images/image3.webp"
import image4 from "../images/image4.png"
import image5 from "../images/image5.png"
export default function Card(){
    return (
<div className="main">
<div className="card1">
<img src={image1} className="pic"/>
<div className="details">
    <span className="bold">5.0 </span>
    <span>  (24) . </span>
    <span>Egypt</span>
    <p>Life lessons with Katie Zaferes</p>
    <p><span className="bold"> From $136 </span>/ person</p>
</div>
</div> 

<div className="card2">
<img src={lady} className="pic2"/>
<div className="details">
    <span className="bold">5.0 </span>
    <span>  (24) . </span>
    <span>Egypt</span>
    <p>Life lessons with Katie Zaferes</p>
    <p><span className="bold"> From $136 </span>/ person</p>
</div>
</div>

<div className="card3">
<img src={image3} className="pic3"/>
<div className="details">
    <span className="bold">5.0 </span>
    <span>  (24) . </span>
    <span>Egypt</span>
    <p>Life lessons with Katie Zaferes</p>
    <p><span className="bold"> From $136 </span>/ person</p>
</div>
</div>

<div className="card4">
<img src={image4} className="pic3"/>
<div className="details">
    <span className="bold">5.0 </span>
    <span>  (24) . </span>
    <span>Egypt</span>
    <p>Life lessons with Katie Zaferes</p>
    <p><span className="bold"> From $136 </span>/ person</p>
</div>
</div>

<div className="card5">
<img src={image5} className="pic3"/>
<div className="details">
    <span className="bold">4.93 </span>
    <span>  (842) . </span>
    <span>New Zealand</span>
    <p>Meet the Wolly Sheep</p>
    <p><span className="bold"> From $89 </span>/ person</p>
</div>
</div>
</div>  
)
}