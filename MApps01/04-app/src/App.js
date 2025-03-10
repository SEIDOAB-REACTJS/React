import logo from './logo.svg';
import './App.css';
import { Greetings } from './components/greetings';
import { Latin } from './components/latin';
import { useState } from 'react';
import { seedGenerator } from './services/seido-helpers';


function App() {

  const _seeder = new seedGenerator();
  //const [message, setMessage] = useState("Good Morning");
  const [sentences, setSentences] = useState (_seeder.latinSentences(5));
  
  const onClickApp = (e) => {

    //setMessage(e.message);
    console.log("App onClick executed"); //, message);
  }; 


  return (
    <>
      <Greetings name = "Martin"/>
      <Greetings name = "Eddie" greeting = {sentences[0]}/>
      <Latin nrItems="5" onClickApp = {onClickApp} sentences={sentences} setSentences={setSentences}/>
    </>
  );
}

export default App;
