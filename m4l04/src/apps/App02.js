import { seedGenerator } from '../services/seido-helpers';
import Person from '../models/person';
import Animal from '../models/animal';

import Footer from '../lesson-steps/02-react-bootstrap/components/footer';
import Header from '../lesson-steps/02-react-bootstrap/components/header';
import Home from '../lesson-steps/02-react-bootstrap/pages/home';
import About from '../lesson-steps/02-react-bootstrap/pages/about';

//https://legacy.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects
//You will notice React in Dev mode mounts the components twice.
//This is by intention to allow you to ease debugging. E.g. you can catch unmounting problems

export function App02_01() {

  return (
    <>
      <Header/>
      <About/>   
      <Footer/>
    </>
  );}

export function App02_02() {

  return (
    <>
      <Header/>
      <Home/>   
      <Footer/>
    </>
  );}

