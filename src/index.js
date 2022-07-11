// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const span = document.querySelector("span");

// createStore : reducer
const countModifier = (count = 0, action) => {
  if (action.type === "ADD"){
      return count+1;
  } else if (action.type === "MINUS"){
    return count-1;
} else{
  return count;
}

};

// createStore
const countstore = createStore(countModifier);
countstore.dispatch({type:"ADD"});
console.log(countstore.getState());

countstore.dispatch({type:"ADD"});
countstore.dispatch({type:"ADD"});
countstore.dispatch({type:"ADD"});
console.log(countstore.getState());

countstore.dispatch({type:"MINUS"});
console.log(countstore.getState());
