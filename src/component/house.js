import React from "react"
import house1 from "../images/house1.png"
import house2 from "../images/house2.png"
import house3 from "../images/house3.png"
export default function House(){
    return(
        <div>
            <h3 className="house_header">Big , small, we got it all</h3>
            <div className="house">
            <div>
                <img src={house1} className="house_class" id="house1"/>
                <h5>Houses</h5>
            </div>

            <div>
                <img src={house2} className="house_class"/>
                <h5>Houses</h5>
            </div>

            <div>
                <img src={house3} className="house_class"/>
                <h5>Houses</h5>
            </div>
            </div>
        </div>
    )
}