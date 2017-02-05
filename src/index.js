// @flow

function bar(x): string {
  return x.length;
}
bar('Hello, world!');

const a = 5;

function sum(a: number, b: number) {
  return a + b;
}

sum(1, 'a');


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

// import App from './components/app';
// import reducers from './reducers';p

// const createStoreWithMiddleware = applyMiddleware()(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
// , document.querySelector('.container'));

