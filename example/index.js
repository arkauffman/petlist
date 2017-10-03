import React from 'react';
import ReactDOM from 'react-dom';
import Test from 'components/Test';
import App from 'components/App';

const dest = document.getElementById('content');

ReactDOM.render(
  <div>
    <Test value={2} default="messages" one="message" /><br/>
    <Test value={1} default="messages" one="message" />

    <App />

  </div>,
  dest
);

window.React = React; // enable debugger
