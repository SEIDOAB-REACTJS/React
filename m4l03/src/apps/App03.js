import { seedGenerator } from '../services/seido-helpers';
import Animal from '../models/animal';

import {FormAnimal01} from '../lesson-steps/03-form-animal/components/01-form-animal';
import {FormAnimal02} from '../lesson-steps/03-form-animal/components/02-form-animal';
import {FormAnimal03} from '../lesson-steps/03-form-animal/components/03-form-animal';
import {AnimalPage04} from '../lesson-steps/03-form-animal/components/04-form-animal-in-page';
import {AnimalPage05} from '../lesson-steps/03-form-animal/components/05-form-animal-in-page';
import {UseAnimalInModal07} from '../lesson-steps/03-form-animal/components/07-use-animal-in-modal';

//https://legacy.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects
//You will notice React in Dev mode mounts the components twice.
//This is by intention to allow you to ease debugging. E.g. you can catch unmounting problems

export function App03_01() {
  const _seeder = new seedGenerator();
  const animal = new Animal().seed(_seeder);

  const onUndo = (e) => 
    {
      console.log (`onUndo invoked`);
    }  


  const onSaveAnimal = (e) => 
  {
    console.log (`onSaveAnimal invoked`);
    
    console.log(animal);   //original person
    console.log(e.animal); //returned by FormUncontrolled02
  }  
  
  return (
    <>
      <FormAnimal01 animal={animal} onSave={onSaveAnimal} onUndo={onUndo}/> 
    </>
  );}

export function App03_02() {
  const _seeder = new seedGenerator();
  const animal = new Animal().seed(_seeder);

  const onUndo = (e) => 
    {
      console.log (`onUndo invoked`);
    }  


  const onSaveAnimal = (e) => 
  {
    console.log (`onSaveAnimal invoked`);
    
    console.log(animal);   //original person
    console.log(e.animal); //returned by FormUncontrolled02
  }  
  
  return (
    <>
      <FormAnimal02 animal={animal} onSave={onSaveAnimal} onUndo={onUndo}/> 
    </>
  );}

export function App03_03() {
  const _seeder = new seedGenerator();
  const animal = new Animal().seed(_seeder);

  const onUndo = (e) => 
    {
      console.log (`onUndo invoked`);
    }  


  const onSaveAnimal = (e) => 
  {
    console.log (`onSaveAnimal invoked`);
    
    console.log(animal);   //original person
    console.log(e.animal); //returned by FormUncontrolled02
  }  
  
  return (
    <>
      <FormAnimal03 animal={animal} onSave={onSaveAnimal} onUndo={onUndo}/> 
    </>
  );}

export function App03_04() {
  return (
    <>
      <AnimalPage04/> 
    </>
  );}

export function App03_05() {
  return (
    <>
      <AnimalPage05/> 
    </>
  );}

export function App03_06() {
  return (
    <>
      <UseAnimalInModal07/> 
    </>
  );}