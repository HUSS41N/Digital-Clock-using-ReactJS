import React from "react"
import ReactDOM from "react-dom"
import DigitalClockComponent from "./DigitalClock"
class DigitalClock extends React.Component {
    state = {currentTime :  new Date().toLocaleTimeString()}
    componentDidMount(){
        setInterval(()=>{
            this.setState({currentTime:new Date().toLocaleTimeString()})
        },1000)
    }
    render(){
        return(
            <div>
                <DigitalClockComponent currentTimeProp={this.state.currentTime} currentDay ={new Date().toLocaleDateString()}/>
            </div>
        )
    }
}

ReactDOM.render(<DigitalClock/>,document.getElementById('root'))