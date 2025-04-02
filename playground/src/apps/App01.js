import { seedGenerator } from '../services/seido-helpers';
import Person from '../models/person';
import Animal from '../models/animal';

import {Helloworld} from "../plays/play01/components/helloworld.js";
import { Colorboxes } from '../plays/play01/components/colorboxes.js';


//https://legacy.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects
//You will notice React in Dev mode mounts the components twice.
//This is by intention to allow you to ease debugging. E.g. you can catch unmounting problems

export function App01_01() {

  return (
    <>
    <Helloworld/>
    </>
  );}

export function App01_02() {
  const mycolors = ["Red", "Blue"];

  return (
    <>
    <Colorboxes colors={["Red", "Blue"]}/>
    <Colorboxes colors={["Red", "Orange", "Green", "Yellow", "Blue"]}/>
    <Colorboxes />
    </>
  );}

export function App01_03() {

  return (
    <>
    </>
  );}

