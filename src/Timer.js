import React from 'react';

var interval ;

class Timer extends React.Component {
    constructor(){
      super();
      this.state={
        hour:0,
        minute:0,
        seconds:0,
        isStart:false,
      };
    }
    StartInterval=()=>{
      if (this.state.isStart === false){
        this.setState({
          isStart:true,
        });
        interval =setInterval(() =>{
          this.setState({
            seconds:this.state.seconds+1,
          });
          if(this.state.seconds ===60){
            this.setState({
              minute:this.state.minute+1,
              seconds:0,
            });
            if(this.state.minute ===60){
              this.setState({
                hour:this.state.hour+1,
                minute:0,
                seconds:0,
              });
          }
        }
        },1000);
        
      }
    }
    StopInterval=()=>{
      clearInterval(interval);
      this.setState({
        isStart:false,
      })
    };
    ResetInterval=()=>{
      this.StopInterval();
      this.setState({
        hour:0,
        minute:0,
        seconds:0,
      });
    };
    componentDidMount(){
      this.StartInterval();
    };

    componentWillUnmount(){
      this.StopInterval();
    }
    render(){
     console.log("render")
     let h = this.state.hour;
     let m = this.state.minute;
     let s = this.state.seconds;
      return(
        <>
        <h1 className='timer'>
        {`${h > 9 ? m : "0"+h } : ${m > 9 ? m : "0"+m} : ${s >9 ? s : "0"+s}`}
        </h1>
        <div id='timeBtn'>
        <button className='btn btn-primary' onClick={this.StartInterval}>start</button>
        <button className='btn btn-danger' onClick={this.StopInterval}>stope</button>
        <button className='btn btn-gray' onClick={this.ResetInterval}>reset</button>
        <button className='btn btn-primary' onClick={this.props.handleSetState}>change</button>

        </div>
        </>
      )
    }
  }
  export default Timer; 