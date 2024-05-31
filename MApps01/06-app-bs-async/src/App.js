import logo from './logo.svg';
import './App.css';

import './css/grid.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {Welcome} from './components/welcome';
import {Musicbands} from './components/musicbands';

function App() {
  return (
  <>
  <Welcome/>
  <Musicbands />
  </>
  );
}

export default App;
