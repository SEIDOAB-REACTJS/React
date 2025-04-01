import { Greetings } from '../lesson-steps/03-app/components/greetings';
import { Latin } from '../lesson-steps/03-app/components/latin';
import { useState } from 'react';
import { seedGenerator } from '../services/seido-helpers';


function App03() {

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

export default App03;
