import '../css/flexbox_5.css'

import { LifeCycle01 } from '../lesson-steps/05-lifecycle/components/01-lifecycle-class';
import { LifeCycleLogger02 } from '../lesson-steps/05-lifecycle/components/02-lifecycle-log-class';
import { ClassInheritance03 } from '../lesson-steps/05-lifecycle/components/03-class-inheritance';
import { UseEffect04 } from '../lesson-steps/05-lifecycle/components/04-lifecycle-func';
import { UseEffect05 } from '../lesson-steps/05-lifecycle/components/05-useEffect';
import { TimeTickerFunc06, TimeTickerClass06, TimeTickerClass06a } from '../lesson-steps/05-lifecycle/components/06-useEffect-sync';
import { ReadWebApiFunc07, ReadWebApiClass07} from '../lesson-steps/05-lifecycle/components/07-useEffect-async';

//https://legacy.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects
//You will notice React in Dev mode mounts the components twice.
//This is by intention to allow you to ease debugging. E.g. you can catch unmounting problems


//Override a Lifecycle event
export function App05_01() {
  return (
    <>
    <LifeCycle01/>
    </>
    );}

//logs lifecycles
export function App05_02() {
  return (
    <>
    <LifeCycleLogger02/>
    </>
    );}

//Using inheritance to make a parent class that logs lifecycles
export function App05_03() {
  return (
    <>
    <ClassInheritance03/>
    </>
    );}

//Lifecyle in functional component
export function App05_04() {
  return (
    <>
    <UseEffect04/>
    </>
    );}


//Studying useEffect
export function App05_05() {
  return (
    <>
    <UseEffect05/>
    </>
    );}

//Using useEffect sync example
export function App05_06() {
  return (
    <>
    <TimeTickerFunc06/>
    <TimeTickerClass06/>
    <TimeTickerClass06a/>
    </>
    );}

//Using useEffect async example
export function App05_07() {
  return (
    <>
    <ReadWebApiFunc07/>
    <ReadWebApiClass07/> 
    </>
    );}
