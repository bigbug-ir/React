
import React from 'react';
var interval ;
class StopeWatch extends React.Component {
    constructor(){
        super();
        this.state={
            time : 60,
        }
    }

    componentDidMount(){
        interval = setInterval(() =>{
            let newTime = this.state.time-1;
            this.setState({
                time : newTime,
            });
        },1000)
    }
    componentDidUpdate(){
        if (this.state.time === 0){
            clearInterval(interval);
            console.log("clear interval")
        }
    }
    render(){
        return(
            <h1 className='timer'>it is{this.state.time}</h1>
        )
    }
}
export default StopeWatch;