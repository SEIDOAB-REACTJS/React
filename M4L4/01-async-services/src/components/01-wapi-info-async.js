import React, { Component, useState, useEffect, setState } from "react";
import musicService from '../services/music-group-service';

export function WebApiInfoAsyncF01() {

  const [wapiData, setWapiData] = useState();
  const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);
 
  useEffect(() => {
      //equvalent to componentDidMount
      console.log('componentDidMount');

      //package the async in an async iffy
      //Immediately-Invoked Function Expressions (IIFE), pronounced "iffy"
      //(async () => {})()
      (async () => {
        const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);
        const info = await service.readInfoAsync();
        setWapiData(info);
      })();}
  , []);

  const onClick = async () => {

    const info = await service.readInfoAsync();
    setWapiData(info);
    console.log('Clicked refesh button in func component');
  }

  return (
    <div>
      <h1>WebApi info</h1>
        <ul>
          <li>nrSeededMusicGroups: {wapiData?.nrSeededMusicGroups} </li>
          <li>nrUnseededMusicGroups: {wapiData?.nrUnseededMusicGroups} </li>
          <li>nrSeededAlbums: {wapiData?.nrSeededAlbums} </li>
          <li>nrUnseededAlbums: {wapiData?.nrUnseededAlbums} </li>
          <li>nrSeededArtists: {wapiData?.nrSeededArtists} </li>
          <li>nrUnseededArtists: {wapiData?.nrUnseededArtists} </li>
        </ul>
        <p>See console for refresh click confirmation</p>
        <button onClick={onClick}>Refresh</button>
    </div>
  );
}


export class WebApiInfoAsyncC01 extends Component {
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
