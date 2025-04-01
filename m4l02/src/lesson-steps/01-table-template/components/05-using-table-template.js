import React, {useState} from 'react'

import '../../../css/grid.css';

import { seedGenerator } from '../../../services/seido-helpers';
import Person from '../../../models/person';

import {TableTemplate04} from './04-table-template-events';

const tableHeaders = ["first name", "last name", "city", "country"];

const _seeder = new seedGenerator();
const _persons = new Person().seedMany(_seeder,10);

export function UsingTableTemplate05() {
  const [data, setData] = useState(_persons);

  const onClickHeader = (e) => 
    {
      console.log(`onClickHeader`);

      //Set the state to full list
      setData(_persons);
    }

  const onClickRow = (e) => 
    {
      console.log(`onClickRow rowitemid: ${e.rowid}`);

      let filter = data.find(i => i.id === e.rowid)?.firstName;
      console.log(filter);

      //shallow clone just to be save in state setting
      let filteredData = [...data.filter(i => i.firstName === filter)];
      setData(filteredData);
    }

  return (
    <>
      <h1>Using TableTemplate</h1>
      <h2>Adding States</h2>
      <TableTemplate04 headers={tableHeaders} initialData={data} onClickHeader={onClickHeader} onClickRow={onClickRow}/>
    </>
  );}
