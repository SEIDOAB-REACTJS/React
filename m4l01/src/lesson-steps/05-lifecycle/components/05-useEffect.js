import React, { Component, useState, useEffect, setState } from "react";
import { uniqueId, seedGenerator } from '../../../services/seido-helpers';

export function UseEffect05() {
  const _seeder = new seedGenerator();

  const [pageNr, setPageNr] = useState(0);
  const [name, setName] = useState(_seeder.petName);

  useEffect(
    () => {
    console.log(`useEffect executed. pageNr: ${pageNr}, name: ${name}`);
    
   return () => {
    console.log(`return useEffect executed. pageNr: ${pageNr}, name: ${name}`);}

}, );
//}, []);
//}, [name]);        
//}, [pageNr]);
//}, [pageNr, name]);

/*
  No dependency array: The effect runs after every render. useEffect(() => { // Runs on every render });
  Empty dependency array: The effect runs only once after the initial render. useEffect(() => { // Runs only on the first render }, []);
  Specific dependencies: The effect runs when any of the specified dependencies change. useEffect(() => { // Runs on the first render and whenever 'prop' or 'state' changes }, [prop, state]);
*/

  const onClickPrev = (e) => { setPageNr(pageNr - 1); }
  const onClickNext = (e) => { setPageNr(pageNr + 1); }

  const onClickChangeName = (e) => { setName(_seeder.petName); }

  return (
    <div>
      <h1>Pet name : {name}</h1>
      <h2>Page number: {pageNr}</h2>
      <button onClick={onClickPrev}>Prev</button>
      <button onClick={onClickChangeName}>Change Name</button>
      <button onClick={onClickNext}>Next</button>
    </div>
  );
}
