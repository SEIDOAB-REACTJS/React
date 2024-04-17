import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import {AnimalModal} from '../components/animal-modal';

export function Animals() {

    const [animals, setAnimals] = useState([]);

    //region needed for Modal
    const [show, setShow] = useState(false);
    const showModal = () => setShow(true);


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
        <div className="container px-4 py-4">
          <ul>{animals.map((a) => <li>{a.name} the {a.type}</li>)}
            
          </ul>
          <Button variant="primary" onClick={showModal}>Add a pet</Button>

        <AnimalModal show={show} setShow={setShow} animal={{name:"", type:""}} onSave={onSave} onUndo={onUndo}/>
       </div>
      </>
    );
  }
