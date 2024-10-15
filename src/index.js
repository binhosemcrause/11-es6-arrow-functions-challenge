import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//1 - Modify the App.jsx file to use Arrow Function

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm start
// to launch your react project in your browser