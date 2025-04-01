import '../css/flexbox_5.css'

import { LifeCycle01 } from '../lesson-steps/05-lifecycle/components/01-lifecycle-class';
import { ClassInheritance03 } from '../lesson-steps/05-lifecycle/components/03-class-inheritance';
import { TimeTickerFunc04 } from '../lesson-steps/05-lifecycle/components/04-lifecycle-func';
import { TimeTickerFunc05, TimeTickerClass05, TimeTickerClass05a } from '../lesson-steps/05-lifecycle/components/05-useEffect';
import { ReadWebApiFunc06, ReadWebApiClass06} from '../lesson-steps/05-lifecycle/components/06-useEffect-async';

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

//Using inheritance to make a parent class that logs lifecycles
export function App05_02() {
  return (
    <>
    <ClassInheritance03/>
    </>
    );}

//Lifecyle in functional component
export function App05_03() {
  return (
    <>
    <TimeTickerFunc04/>
    </>
    );}


//Using Lifecyles example
export function App05_04() {
  return (
    <>
    <TimeTickerFunc05/>
    <TimeTickerClass05/>
    <TimeTickerClass05a/>
    </>
    );}

//Using Lifecyles async example
export function App05_05() {
  return (
    <>
    <ReadWebApiFunc06/>
    <ReadWebApiClass06/> 
    </>
    );}
