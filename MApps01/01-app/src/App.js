import logo from './logo.svg';
import './App.css';
import {Greetings} from './components/greetings';

function App() {
  return (
    <>
    <Greetings name="Harry" like="books"/>
    <Greetings name="Snape" like="quotes"/>
    </>
  );
}

export default App;
