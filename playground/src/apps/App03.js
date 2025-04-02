import { seedGenerator } from '../services/seido-helpers';
import Person from '../models/person';
import Animal from '../models/animal';
import { Helloworld } from '../plays/play03/components/helloworld';

//../plays/play03/components

//https://legacy.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects
//You will notice React in Dev mode mounts the components twice.
//This is by intention to allow you to ease debugging. E.g. you can catch unmounting problems

export function App03_01() {

  return (
    <>
    <Helloworld/>
    </>
  );}

export function App03_02() {

  return (
    <>
    </>
  );}

export function App03_03() {

  return (
    <>
    </>
  );}

