import '../css/flexbox_5.css'
import { Cards01 } from '../lesson-steps/06-cards-exercise/components/cards01';
import { Cards02 } from '../lesson-steps/06-cards-exercise/components/cards02';
import { Cards03 } from '../lesson-steps/06-cards-exercise-Answ/components/cards03';


//https://legacy.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects
//You will notice React in Dev mode mounts the components twice.
//This is by intention to allow you to ease debugging. E.g. you can catch unmounting problems



export function App06_01() {
  return (
    <>
    <Cards01/>
    </>
    );}
    
export function App06_02() {
  return (
    <>
    <Cards02 imgs={['img1.png', 'img3.png']}/>
    </>
    );}

export function App06_03() {
  return (
    <>
    <Cards03 imgs={['img1.png', 'img3.png']} titles={['Hola', 'Yabadoo']}/>
    </>
    );}

