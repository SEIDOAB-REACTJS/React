import { seedGenerator } from '../services/seido-helpers';
import Person from '../models/person';
import Animal from '../models/animal';

import { WebApiInfoAsyncF01, WebApiInfoAsyncC01} from '../lesson-steps/01-async-services/components/01-wapi-info-async';
import { WebApiListAsyncF02} from '../lesson-steps/01-async-services/components/02-wapi-list-async';
import { WebApiListPagingAsyncF03} from '../lesson-steps/01-async-services/components/03-wapi-list-paging-async';
import { WebApiListSearchAsyncF04} from '../lesson-steps/01-async-services/components/04-wapi-list-search-async';

//https://legacy.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects
//You will notice React in Dev mode mounts the components twice.
//This is by intention to allow you to ease debugging. E.g. you can catch unmounting problems

export function App01_01() {

  return (
    <>
      <WebApiInfoAsyncF01/>
      <WebApiInfoAsyncC01/> 
    </>
  );}

export function App01_02() {

  return (
    <>
      <WebApiListAsyncF02/>
    </>
  );}

export function App01_03() {

  return (
    <>
      <WebApiListPagingAsyncF03/>
    </>
  );}

export function App01_04() {

  return (
    <>
      <WebApiListSearchAsyncF04/>
    </>
  );}
