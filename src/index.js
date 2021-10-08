import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// var firebase = require("firebase");
import { firebase } from '@firebase/app'
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCX2qtZg9hVhbSVN7tlvsvswEYmi36WrfY",
  authDomain: "mychatappfirebase-c180f.firebaseapp.com",
  databaseURL: "https://mychatappfirebase-c180f.firebaseio.com",
  projectId: "mychatappfirebase-c180f",
  storageBucket: "mychatappfirebase-c180f.appspot.com",
  messagingSenderId: "982645306562",
  appId: "1:982645306562:web:d6f0e7547a12411795375b",
  measurementId: "G-XYD4M4MHGY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
