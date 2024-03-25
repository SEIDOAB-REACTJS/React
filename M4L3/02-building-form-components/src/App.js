import React, {useState} from 'react';
import {seedGenerator } from './services/seido-helpers';
import Person from './models/person';
import FormValidation05 from './components/05-form-validation';

import './App.css';

function App() {

    const _seeder = new seedGenerator();
    const seededData = new Person().seed(_seeder);

    //React state lifting. The person is state in App and passed as props to FormValidation05 (props downwards flow)
    const [person, setPerson] = useState(seededData);

    //React event bubbling, onSave and onUndo called from FormValidation05 (events upwards flow)
    const onSave = (e) => 
    {
      console.log (`onSave invoked`);
      console.log(person);
    }  

    const onUndo = (e) => 
    {
      console.log (`onUndo invoked`);
      setPerson(new Person().seed(_seeder));
    }  

    return (
      <>
        <FormValidation05 friend={person} setFriend={setPerson} onSave={onSave} onUndo={onUndo}/>
      </>
    );
  }

export default App;
