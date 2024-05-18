import React from 'react';
import './style.css';
import Hello from './Hello';
import Timer from './Timer';
import StopeWatch from './stopeWatch';
class App extends React.Component {
    render(){
      return(
        <div className="main">
          <Hello/>
          <Timer/>
          <StopeWatch/>
        </div>
      );
    }
}
export default App;