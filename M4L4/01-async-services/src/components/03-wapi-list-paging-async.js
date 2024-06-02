import React, { Component, useState, useEffect, setState } from "react";
import musicService from '../services/music-group-service';

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
        const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);
        const data = await service.readAlbumsAsync(pageNr);
        setWapiData(data);
      })();}

  ,[pageNr]); //dependency on pageNr means useEffect will run each time pageNr change

  const onClick = async () => {

    if (pageNr < wapiData.pageCount-1){
    
      //this will make useEffect run as pageNr is set as a dependency
      setPageNr(pageNr+1);
      console.log('Clicked next page in func component');
    }
  }

  return (
    <div>
      <h1>WebApi list page {pageNr}</h1>
        <ul>
          {wapiData?.pageItems.map((item, index) => (
            <li key={index}>{item.name} was released year {item.releaseYear} and havle sold {item.copiesSold} copies </li>
          ))}
        </ul>
        <button onClick={onClick}>Next page</button>
    </div>
  );
}
