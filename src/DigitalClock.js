import React from "react"
import "./DigitalClock.css"
const DigitalClockComponent = (props) => {
    return (
        <div className="clock-wrapper">
            <div>
                <h1>{props.currentTimeProp}</h1>
                <h1>{props.currentDay}</h1>
            </div>
        </div>
    )
}
export default DigitalClockComponent