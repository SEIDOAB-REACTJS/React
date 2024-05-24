import logo from './logo.svg';
import './App.css';
import { Greetings } from './components/greetings';
import { Latin } from './components/latin';

function App() {
  return (
    <>
      <Greetings name = "Martin"/>
      <Greetings name = "Eddie"/>
      <Latin nrItems="5"/>
    </>
  );
}

export default App;
