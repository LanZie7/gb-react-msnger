import logo from './logo.svg';
import './App.css';
import React from "react";
import { Message } from "./components/Message/Message";

const name = "Ksenia";

function App() {
    const alertMsg = () => {
        alert ("Message");
    }
  return (
    <div className="App">
      <Message name={ name } age={ 27 } doSmth={alertMsg} />
    </div>
  );
}

export default App;
