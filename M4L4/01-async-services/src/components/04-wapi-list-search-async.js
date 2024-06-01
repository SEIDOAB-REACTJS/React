import React, { Component, useState, useEffect, setState } from "react";
import musicService from '../services/music-group-service';

export function WebApiListSearchAsyncF04() {

  const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);

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
        const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);
        const data = await service.readAlbumsAsync(0);
        setWapiData(data);
      })();}

  ,[]); //empty dependency array means useEffect will run only at initial mount

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
            <li key={index}>{item.name} was released year {item.releaseYear} and havle sold {item.copiesSold} copies </li>
          ))}
        </ul>
        <button onClick={onNextPage}>Next page</button>
    </div>
  );
}


export class WebApiListSearchAsyncC04 extends Component {
  constructor(props) {
    super(props);          //Needs to be the 1st call

    this.service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);

    //states, in class component, initialized, here with an empty object
    this.state = {wapiData: {}}

    //Eventhandler, in class component
    this.onClick = this.onClick.bind(this);
  }

  //Eventhandler, in class
  async onClick(e) {
    const info = await this.service.readInfoAsync();

    this.setState({wapiData: info});
    console.log('Clicked refesh button in class component');
  }

  componentDidMount() {
    console.log('componentDidMount');

    //package the async in an async iffy
    //Immediately-Invoked Function Expressions (IIFE), pronounced "iffy"
    //(async () => {})()
    (async () => {
      console.log('componentDidMount');
      
      const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);
      const info = await service.readInfoAsync();
      this.setState({wapiData: info});
    })();
  }

  render() {
    return (
      <div>
        <h1>WebApi info</h1>
        <ul>
          <li>nrSeededMusicGroups: {this.state.wapiData?.nrSeededMusicGroups} </li>
          <li>nrUnseededMusicGroups: {this.state.wapiData?.nrUnseededMusicGroups} </li>
          <li>nrSeededAlbums: {this.state.wapiData?.nrSeededAlbums} </li>
          <li>nrUnseededAlbums: {this.state.wapiData?.nrUnseededAlbums} </li>
          <li>nrSeededArtists: {this.state.wapiData?.nrSeededArtists} </li>
          <li>nrUnseededArtists: {this.state.wapiData?.nrUnseededArtists} </li>
        </ul>
        <p>See console for refresh click confirmation</p>
        <button onClick={this.onClick}>Refresh</button>
      </div>
    )
  }
}
