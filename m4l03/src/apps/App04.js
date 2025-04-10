import {SearchInPage02} from '../lesson-steps/04-form-search-async/components/02-search-in-page';
import {SearchInModal03} from '../lesson-steps/04-form-search-async/components/03-search-in-modal';

//https://legacy.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects
//You will notice React in Dev mode mounts the components twice.
//This is by intention to allow you to ease debugging. E.g. you can catch unmounting problems

export function App04_01() {
  return (
    <>
      <SearchInPage02/>
    </>
  );}

export function App04_02() {
  return (
    <>
      <SearchInModal03/>
    </>
  );}
