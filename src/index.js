import React from 'react';
import ReactDOM from 'react-dom';

const tick =()=>{
  const element=(
    <div>
      <h1>hello world</h1>
      <h2>it is {new Date().toLocaleTimeString()}</h2>
    </div>
  );

ReactDOM.render( element, document.getElementById('root'));

};
setInterval(() => {
  tick();
}, 1000);
