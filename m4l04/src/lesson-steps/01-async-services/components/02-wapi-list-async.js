import React, { Component, useState, useEffect, setState } from "react";
import musicService from '../../../services/music-group-service';

export function WebApiListAsyncF02() {

  const [wapiData, setWapiData] = useState();
  const service = new musicService(`https://seido-webservice-307d89e1f16a.azurewebsites.net/api`);
 
  useEffect(() => {
      //equvalent to componentDidMount
      console.log('useEffect run');

      //package the async in an async iffy
      //Immediately-Invoked Function Expressions (IIFE), pronounced "iffy"
      //(async () => {})()
      (async () => {
        const service = new musicService(`https://seido-webservice-307d89e1f16a.azurewebsites.net/api`);
        const data = await service.readAlbumsAsync(0);
        setWapiData(data);
      })();}
  , []);
  
  //Empty dependency array: The effect runs only once after the initial render. useEffect(() => { // Runs only on the first render }, []);

  const onClick = async () => {

      const data = await service.readAlbumsAsync(1);
      setWapiData(data);
      console.log('Clicked refesh button in class component');
    }

  return (
    <div>
      <h1>WebApi list page</h1>
        <ul>
          {wapiData?.pageItems.map((item, index) => (
            <li key={index}>{item.name} was released year {item.releaseYear} and have sold {item.copiesSold} copies </li>
          ))}
        </ul>
        <button onClick={onClick}>Refresh</button>
    </div>
  );
}

