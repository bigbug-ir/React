
import React from 'react';

class StopWatch extends React.Component {
    constructor(){
        super();
        this.state = {};
    }

    render(){
        return(
            <>
            <h1 className='timer'>{this.props.time}</h1>
            <div id='timeBtn'>
            <button className='btn btn-primary' onClick={this.props.startTime}>start</button>
            <button className='btn btn-danger' onClick={this.props.stopeTime}>stope</button>
            <button className='btn btn-gray' onClick={this.props.resetTime}>reset</button>
            </div>
           
            </>
        )
    }
}
export default StopWatch;