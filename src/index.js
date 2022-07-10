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

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const span = document.querySelector("span");

let count = 0;

const updateText = () => {
  span.innerText = count;
}
const handleAdd = () => {
  console.log("add");
  ++count;
  updateText();
}

const handleMinus = () => {
  console.log("Minus");
  --count;
  updateText();
}

add.addEventListener("click",handleAdd);
minus.addEventListener("click",handleMinus);
