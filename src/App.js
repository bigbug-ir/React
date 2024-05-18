import React, { useState } from 'react';
import './style.css';
import Hello from './Hello';
// import Timer from './Timer';
import StopeWatch from './stopeWatch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Hello Guys',
      time : 60,
      TF:false,
      interval:60,
    };
    // this.handelSetState = this.handelSetState.bind(this);
  }
  handelSetState=()=>{
    this.setState({
      title: "Hello everybody",

    })
  }
  // handelSetState(){
  //   this.setState({
  //     title: "Hello everybody"
  //   })
  // }
  startTime=()=>{
    console.log("component")
    if(this.state.TF === false){
      this.setState({
        TF:true,
      });
      useState.interval =setInterval(() =>{
        this.setState({
            time:this.state.time-1,
        });
      },1000);
    }
  }
   
  stopeTime=()=>{
    if(this.state.TF === true){
      clearInterval(useState.interval);
      console.log("Stoped");
      this.setState({
        TF:false,
      });
    }
  }
  componentDidUpdate(){
    if(this.state.time === 0){
        clearInterval(useState.interval);
        console.log("Stoped");

    }
  }
    render(){
      return(
        <div className="main">
          <Hello title={this.state.title}/>
          {/* <Timer/> */}
          <StopeWatch time={this.state.time} startTime={this.startTime} stopeTime ={this.stopeTime}  />
        </div>
      );
    }
}
export default App;