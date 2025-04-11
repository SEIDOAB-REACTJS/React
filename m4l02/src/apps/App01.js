import '../css/grid.css';

import { seedGenerator } from '../services/seido-helpers';
import Person from '../models/person';

import {TableTemplate01} from '../lesson-steps/01-table-template/components/01-table-template-bootstrap';
import {TableTemplate02} from '../lesson-steps/01-table-template/components/02-table-template-headers';
import {TableTemplate03} from '../lesson-steps/01-table-template/components/03-table-template-data';
import {TableTemplate04} from '../lesson-steps/01-table-template/components/04-table-template-events';
import {UsingTableTemplate05} from '../lesson-steps/01-table-template/components/05-using-table-template';
import {UsingTableTemplate06, TableTemplate06} from '../lesson-steps/01-table-template/components/06-using-table-template-paging';

//https://legacy.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects
//You will notice React in Dev mode mounts the components twice.
//This is by intention to allow you to ease debugging. E.g. you can catch unmounting problems

const tableHeaders = ["first name", "last name", "city", "country"];

const _seeder = new seedGenerator();
const _persons = new Person().seedMany(_seeder,10);


export function App01_01() {
  return (
    <>
      <TableTemplate01/>
    </>
  );}

export function App01_02() {
  return (
    <>
      <TableTemplate02 headers={tableHeaders}/>
    </>
  );}

export function App01_03() {
  return (
    <>
      <TableTemplate03 headers={tableHeaders} initialData={_persons}/>
    </>
  );}

export function App01_04() {

  const onClickHeader = (e) => 
    {
      console.log(`onClickHeader`);
    }

  const onClickRow = (e) => 
    {
      console.log(`onClickRow rowitemid: ${e.rowid}`);
    }

  return (
    <>
      <TableTemplate04 headers={tableHeaders} initialData={_persons} onClickHeader={onClickHeader} onClickRow={onClickRow}/>
    </>
  );}

  export function App01_05() {
    return (
      <>
        <UsingTableTemplate05/>
        <UsingTableTemplate05/>
      </>
    );}

  export function App01_06() {
    return (
      <>
        <UsingTableTemplate06 pageSize={10}/>
        <UsingTableTemplate06 pageSize={5}/>
      </>
    );}