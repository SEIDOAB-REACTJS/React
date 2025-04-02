import React, { Component, useState, useEffect, setState } from "react";
import musicService from '../../../services/music-group-service';

export function WebApiListSearchAsyncF04() {

  const service = new musicService(`https://seido-webservice-307d89e1f16a.azurewebsites.net/api`);

  const [wapiData, setWapiData] = useState();
  const [pageNr, setPageNr] = useState(0);
  const [searchFilter, setSearchFilter] = useState(null);
 
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

  ,[]); //empty dependency array means useEffect will run only once at initial mount

  const onNextPage = async () => {

    if (pageNr < wapiData.pageCount-1){
    
      const data = await service.readAlbumsAsync(pageNr, true, searchFilter);
      setWapiData(data);
      setPageNr(pageNr+1);
      console.log('Clicked next page in func component');
    }
  }

  const onSearch = async (e) => {

    //Important to make sure .value is converted to a string as .value can be any type
    const sf =  String(document.getElementById("search").value);

    const data = await service.readAlbumsAsync(pageNr, true, sf);
  
    setWapiData(data);
    setSearchFilter(sf);
    setPageNr(0);
    console.log('Clicked search page in func component');
  }

  return (
    <div>
      <h1>WebApi list page {pageNr} searchfilter {searchFilter}</h1>

        <form>
          <input id='search' placeholder="search" defaultValue={searchFilter}/>
          <button onClick={onSearch} type="button">Search</button>
        </form>

        <ul>
          {wapiData?.pageItems.map((item, index) => (
            <li key={index}>{item.name} was released year {item.releaseYear} and have sold {item.copiesSold} copies </li>
          ))}
        </ul>
        <button onClick={onNextPage}>Next page</button>
    </div>
  );
}


