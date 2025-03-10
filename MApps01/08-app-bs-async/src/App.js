import logo from './logo.svg';
import './App.css';

import './css/grid.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {Welcome} from './components/welcome';
import {Musicalbums} from './components/musicalbums';

function App() {
  return (
  <>
  <Welcome/>
  <Musicalbums />
  </>
  );
}

export default App;
