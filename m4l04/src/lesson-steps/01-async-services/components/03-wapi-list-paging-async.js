import React, { Component, useState, useEffect, setState } from "react";
import musicService from '../../../services/music-group-service';

export function WebApiListPagingAsyncF03() {

  const [wapiData, setWapiData] = useState();
  const [pageNr, setPageNr] = useState(0);
 
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

  ,[]); 
  //Empty dependency array: The effect runs only once after the initial render. useEffect(() => { // Runs only on the first render }, []);

  const onClick = async () => {

    if (pageNr < wapiData.pageCount-1){
    
      const service = new musicService(`https://seido-webservice-307d89e1f16a.azurewebsites.net/api`);
      const data = await service.readAlbumsAsync(pageNr+1);
      
      setWapiData(data);
      setPageNr(pageNr+1);
      console.log('Clicked next page in func component');
    }
  }

  return (
    <div>
      <h1>WebApi list page {pageNr}</h1>
        <ul>
          {wapiData?.pageItems.map((item, index) => (
            <li key={index}>{item.name} was released year {item.releaseYear} and have sold {item.copiesSold} copies</li>
          ))}
        </ul>
        <button onClick={onClick}>Next page</button>
    </div>
  );
}


/* Exercise
1. Add previous page button and click funtionality to move paging backwards
*/