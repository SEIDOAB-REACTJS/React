import React, {useState} from 'react';
import {seedGenerator } from '../../../services/seido-helpers';
import Animal from '../../../models/animal';
import {FormAnimal03} from './03-form-animal';

export function AnimalPage04() {

    const _seeder = new seedGenerator();
    const a = new Animal().seed(_seeder);

    const [animal, setAnimal] = useState(a);
    const [animals, setAnimals] = useState([]);

    //React event bubbling, onSave and onUndo called from FormValidation05 (events upwards flow)
    const onSave = (e) => 
    {
      console.log (`onSave invoked`);
      
      console.log(animal);   
      console.log(e.animal); 

      setAnimal(e.animal);

      //IReact does not accept setAnimals(animals); - setState with a state as parameter
      //use a copy
      //Alt 1
      setAnimals([...animals, e.animal]);
      
      /* Alt 2
      const _animals = [...animals];
      _animals.push(animal);

      setAnimals(_animals);
      */
    }  

    const onUndo = (e) => 
    {
      console.log (`onUndo invoked`);
    }  

    return (
      <>
      <h1>Animal list</h1>
      <ul>
        {animals.map((animal) => (<li>{animal.name} a fine {animal.type} of {animal.age} years</li>))} 
      </ul>


      <h1>Latest Animal</h1>
        <ul>
          <li>Name: {animal.name}</li>
          <li>Type: {animal.type} </li>
          <li>Type: {animal.age} </li>
        </ul>
       <FormAnimal03 animal={animal} onSave={onSave} onUndo={onUndo}/>
      </>
    );
  }
