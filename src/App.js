import React from 'react';
import './style.css';
import Hello from './Hello';
// import Timer from './Timer';
import StopeWatch from './stopeWatch';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Hello Guys',
    };
    // this.handelSetState = this.handelSetState.bind(this);
  }
  handelSetState=()=>{
    this.setState({
      title: "Hello everybody"
    })
  }
  // handelSetState(){
  //   this.setState({
  //     title: "Hello everybody"
  //   })
  // }
    render(){
      return(
        <div className="main">
          <Hello title={this.state.title}/>
          {/* <Timer/> */}
          <StopeWatch handelSetState={this.handelSetState} />
        </div>
      );
    }
}
export default App;