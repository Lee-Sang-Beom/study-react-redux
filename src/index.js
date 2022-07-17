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
  console.log(count, action);
  if (action.type === "ADD"){
      return count+1;
  } else if (action.type === "MINUS"){
    return count-1;
} else{
  return count;
}

};

// createStore
const countStore = createStore(countModifier);

const onChange = () =>{ // role of observer 
  span.innerText = countStore.getState();
}

const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};


countStore.subscribe(onChange); // 변화 감지 시 마다 subscribe 호출
add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);