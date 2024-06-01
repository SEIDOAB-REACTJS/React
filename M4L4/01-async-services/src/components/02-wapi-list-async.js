import React, { Component, useState, useEffect, setState } from "react";
import musicService from '../services/music-group-service';

export function WebApiListAsyncF02() {

  const [wapiData, setWapiData] = useState();
  const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);
 
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
  );

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
            <li key={index}>{item.name} was released year {item.releaseYear} and havle sold 
            {item.copiesSold} copies </li>
          ))}
        </ul>
        <button onClick={onClick}>Refresh</button>
    </div>
  );
}


export class WebApiListAsyncC02 extends Component {
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
