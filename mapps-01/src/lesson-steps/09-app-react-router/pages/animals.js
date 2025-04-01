import React, {useState} from 'react';
//import Animal from '../models/animal';
import {AnimalForm} from '../components/animal-form';

export function Animals() {

    const [animals, setAnimals] = useState([]);

    //React event bubbling, onSave and onUndo called from FormValidation05 (events upwards flow)
    const onSave = (e) => 
    {
      console.log (`onSave invoked`);
      
      console.log(e.animal); 

      const aCopy = JSON.parse(JSON.stringify(animals));
      aCopy.push(e.animal);

      setAnimals(aCopy);
    }  

    const onUndo = (e) => 
    {
      console.log (`onUndo invoked`);
    }  

    return (
      <>
        <ul>{animals.map((a) => <li>{a.name} the {a.type}</li>)}
          
        </ul>
       <AnimalForm animal={{name:"", type:""}} onSave={onSave} onUndo={onUndo}/>
      </>
    );
  }
