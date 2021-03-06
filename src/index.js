import * as React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import './index.css';
import { persistor, store } from "./store";
import { Provider } from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
// import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
