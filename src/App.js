import React , { useState  } from 'react';
import './style.css';
import Hello from './Hello';
import Timer from './Timer';



const App = ()=>{
  const [title,setTitle] = useState("Hello Guys"); 
  // const [hour,setHour] = useState(0);
  
  const handleSetState =()=>{
    setTitle("Hello Everybody");
  }
 
  return(
    <div className='main'>
      <Hello title = {title}/>
      <Timer handleSetState = {handleSetState}/>
    </div>
  )
};


// import StopeWatch from './stopWatch';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: 'Hello Guys',
//       time : 60,
//       TF:false,
//       interval:60,
//     };
//     // this.handelSetState = this.handelSetState.bind(this);
//   }
//   handelSetState=()=>{
//     this.setState({
//       title: "Hello everybody",

//     })
//   }
//   // handelSetState(){
//   //   this.setState({
//   //     title: "Hello everybody"
//   //   })
//   // }
//   startTime=()=>{
//     console.log("component")
//     if(this.state.TF === false){
//       this.setState({
//         TF:true,
//       });
//       useState.interval =setInterval(() =>{
//         this.setState({
//             time:this.state.time-1,
//         });
//       },1000);
//     }
//   }
   
//   stopTime=()=>{
//     if(this.state.TF === true){
//       clearInterval(useState.interval);
//       console.log("Stoped");
//       this.setState({
//         TF:false,
//       });
//     }
//   }
//   resetTime=()=>{
//     this.stopTime();
//     this.setState({
//       time:60,
//     });
//   }
//   componentDidUpdate(){
//     if(this.state.time === 0){
//         clearInterval(useState.interval);
//         console.log("Stoped");

//     }
//   }
//     render(){
//       return(
//         <div className="main">
//           <Hello title={this.state.title}/>
//           <Timer/>
//           {/* <StopWatch time={this.state.time} startTime={this.startTime} stopeTime ={this.stopeTime}  resetTime ={this.resetTime}/> */}
//         </div>
//       );
//     }
// }
export default App;