import { seedGenerator } from '../services/seido-helpers';
import Person from '../models/person';
import Animal from '../models/animal';

import { BrowserRouter} from 'react-router';
import Footer from '../lesson-steps/04-passing-parameters/components/footer';
import Header from '../lesson-steps/04-passing-parameters/components/header';
import AppRouter from '../lesson-steps/04-passing-parameters/routes/approuter';

//https://legacy.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects
//You will notice React in Dev mode mounts the components twice.
//This is by intention to allow you to ease debugging. E.g. you can catch unmounting problems

export function App04_01() {

  return (
    <>
    <BrowserRouter>

    <Header/>
    <AppRouter/>   
    <Footer/>

    </BrowserRouter>
    </>
  );}
