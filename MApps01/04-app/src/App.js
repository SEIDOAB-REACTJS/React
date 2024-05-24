import logo from './logo.svg';
import './App.css';
import { Greetings } from './components/greetings';
import { Latin } from './components/latin';
import { useState } from 'react';

function App() {

  const [message, setMessage] = useState("Good Morning");
  const onClickApp = (e) => {

    setMessage(e.message);
    console.log("App onClick executed", message)
  }; 


  return (
    <>
      <Greetings name = "Martin"/>
      <Greetings name = "Eddie" greeting = {message}/>
      <Latin nrItems="5" onClickApp = {onClickApp}/>
    </>
  );
}

export default App;
