import React from 'react';

var interval ;

class Timer extends React.Component {
    constructor(){
      super();
      this.state={
        time:new Date().toLocaleTimeString(),
      };
    }
    componentDidMount(){
      console.log("component")
      interval =setInterval(() =>{
        this.setState({
          time:new Date().toLocaleTimeString(),
        });
      },1000);
    }
    componentDidUpdate(){
      console.log("update")
      console.log(this.state.time)
      if (this.state.time === "14:00:00"){
        clearInterval(interval);
        console.log("clear")
      }
    }
    componentWillUnmount(){
      console.log("unmount")
      clearInterval(interval);
    }
    render(){
     console.log("render")
      return(
        <h1 className='timer'>it is{this.state.time}</h1>
      )
    }
  }
  export default Timer; 