import { seedGenerator } from '../services/seido-helpers';
import Person from '../models/person';
import Animal from '../models/animal';
import { Helloworld } from '../plays/play05/components/helloworld';


//https://legacy.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects
//You will notice React in Dev mode mounts the components twice.
//This is by intention to allow you to ease debugging. E.g. you can catch unmounting problems

export function App05_01() {

  return (
    <>
    <Helloworld/>
    </>
  );}

export function App05_02() {

  return (
    <>
    </>
  );}

export function App05_03() {

  return (
    <>
    </>
  );}

