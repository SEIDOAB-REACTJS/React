import { seedGenerator } from '../services/seido-helpers';
import Person from '../models/person';

import {Form01} from '../lesson-steps/01-building-form-components/components/01-form';
import {FormUncontrolled02} from '../lesson-steps/01-building-form-components/components/02-form-uncontrolled';
import {FormControlled03} from '../lesson-steps/01-building-form-components/components/03-form-controlled';
import {FormHandleChange04} from '../lesson-steps/01-building-form-components/components/04-form-handle-change';
import {FormValidation05} from '../lesson-steps/01-building-form-components/components/05-form-validation';

//https://legacy.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects
//You will notice React in Dev mode mounts the components twice.
//This is by intention to allow you to ease debugging. E.g. you can catch unmounting problems

export function App01_01() {

  const onSave = (e) => 
  {
    console.log (`onSave invoked: ${e.person.fname}`);    
  }  

  const onUndo = (e) => 
  {
    console.log (`onUndo invoked`);
  }  

  return (
    <>
      <Form01 onSave={onSave} onUndo={onUndo}/>
    </>
  );}

export function App01_02() {
  
    const onSave = (e) => 
    {
      console.log (`onSave invoked`);      
    }  
  
    const onUndo = (e) => 
    {
      console.log (`onUndo invoked`);
    }  
  
    return (
      <>
         <FormUncontrolled02 onSave={onSave} onUndo={onUndo}/>
      </>
    );}

export function App01_03() {

  const _seeder = new seedGenerator();
  const person = new Person().seed(_seeder);

  const onSave = (e) => 
  {
    console.log (`onSave invoked`);
    
    console.log(person);   //original person
    console.log(e.person); //returned by form
    
  }  

  const onUndo = (e) => 
  {
    console.log (`onUndo invoked`);
    console.log(e.person); 
  }  

  return (
    <>
      <FormControlled03 friend={person} onSave={onSave} onUndo={onUndo}/>
    </>
  );}

export function App01_04() {

  const _seeder = new seedGenerator();
  const person = new Person().seed(_seeder);

  const onSave = (e) => 
  {
    console.log (`onSave invoked`);
    
    console.log(person);   //original person
    console.log(e.person); //returned by form
    
  }  

  const onUndo = (e) => 
  {
    console.log (`onUndo invoked`);
    console.log(e.person); 
  }  

  return (
    <>
      <FormHandleChange04 friend={person} onSave={onSave} onUndo={onUndo}/>
    </>
  );}


export function App01_05() {

  const _seeder = new seedGenerator();
  const person = new Person().seed(_seeder);

  const onSave = (e) => 
  {
    console.log (`onSave invoked`);
    
    console.log(person);   //original person
    console.log(e.person); //returned by form
    
  }  

  const onUndo = (e) => 
  {
    console.log (`onUndo invoked`);
    console.log(e.person); 
  }  

  return (
    <>
      <FormValidation05 friend={person} onSave={onSave} onUndo={onUndo}/>
    </>
  );}

