import React, {useState} from 'react';
import {seedGenerator } from './services/seido-helpers';
import Person from './models/person';
import Form01 from './components/01-form';
import FormUncontrolled02 from './components/02-form-uncontrolled';
import FormControlled03 from './components/03-form-controlled';
import FormHandleChange04 from './components/04-form-handle-change';
import FormValidation05 from './components/05-form-validation';

import './App.css';

function App() {

    //React state lifting. The person is state in App and passed as props to used from <FormControlled03> (props downwards flow)
    const [person, setPerson] = useState();

    //React event bubbling, onSave and onUndo called from FormValidation05 (events upwards flow)
    const onSave = (e) => 
    {
      console.log (`onSave invoked`);
      console.log(person);
      console.log(e.person); //used by FormUncontrolled02
    }  

    const onUndo = (e) => 
    {
      console.log (`onUndo invoked`);
    }  

    return (
      <>
       <Form01 onSave={onSave} onUndo={onUndo}/>
      </>
    );
  }
/*
       <Form01 onSave={onSave} onUndo={onUndo}/>
       <FormUncontrolled02 onSave={onSave} onUndo={onUndo}/>
       <FormControlled03 friend={person} setFriend={setPerson} onSave={onSave} onUndo={onUndo}/>
       <FormHandleChange04 friend={person} setFriend={setPerson} onSave={onSave} onUndo={onUndo}/>
       <FormValidation05 friend={person} setFriend={setPerson} onSave={onSave} onUndo={onUndo}/>
*/
export default App;
