import React, { Component, useState, useEffect, setState } from "react";
import musicService from '../../../services/music-group-service';

export function WebApiInfoAsyncF01() {

  const [wapiData, setWapiData] = useState();
  const service = new musicService(`https://seido-webservice-307d89e1f16a.azurewebsites.net/api`);
 
  useEffect(() => {
      //equvalent to componentDidMount
      console.log('componentDidMount');

      //package the async in an async iffy
      //Immediately-Invoked Function Expressions (IIFE), pronounced "iffy"
      //(async () => {})()
      (async () => {
        const service = new musicService(`https://seido-webservice-307d89e1f16a.azurewebsites.net/api`);
        const info = await service.readInfoAsync();
        setWapiData(info);
      })();}
  , []);

  //Empty dependency array: The effect runs only once after the initial render. useEffect(() => { // Runs only on the first render }, []);

  const onClick = async () => {

    const info = await service.readInfoAsync();
    setWapiData(info);
    console.log('Clicked refesh button in func component');
  }

  return (
    <div>
      <h1>WebApi info</h1>
        <ul>
          <li>nrSeededMusicGroups: {wapiData?.db?.nrSeededMusicGroups} </li>
          <li>nrUnseededMusicGroups: {wapiData?.db?.nrUnseededMusicGroups} </li>
          <li>nrSeededAlbums: {wapiData?.db?.nrSeededAlbums} </li>
          <li>nrUnseededAlbums: {wapiData?.db?.nrUnseededAlbums} </li>
          <li>nrSeededArtists: {wapiData?.db?.nrSeededArtists} </li>
          <li>nrUnseededArtists: {wapiData?.db?.nrUnseededArtists} </li>
        </ul>
        <p>See console for refresh click confirmation</p>
        <button onClick={onClick}>Refresh</button>
    </div>
  );
}


export class WebApiInfoAsyncC01 extends Component {
  constructor(props) {
    super(props);          //Needs to be the 1st call

    this.service = new musicService(`https://seido-webservice-307d89e1f16a.azurewebsites.net/api`);

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
      
      const service = new musicService(`https://seido-webservice-307d89e1f16a.azurewebsites.net/api`);
      const info = await service.readInfoAsync();
      this.setState({wapiData: info});
    })();
  }

  render() {
    return (
      <div>
        <h1>WebApi info</h1>
        <ul>
          <li>nrSeededMusicGroups: {this.state.wapiData?.db?.nrSeededMusicGroups} </li>
          <li>nrUnseededMusicGroups: {this.state.wapiData?.db?.nrUnseededMusicGroups} </li>
          <li>nrSeededAlbums: {this.state.wapiData?.db?.nrSeededAlbums} </li>
          <li>nrUnseededAlbums: {this.state.wapiData?.db?.nrUnseededAlbums} </li>
          <li>nrSeededArtists: {this.state.wapiData?.db?.nrSeededArtists} </li>
          <li>nrUnseededArtists: {this.state.wapiData?.db?.nrUnseededArtists} </li>
        </ul>
        <p>See console for refresh click confirmation</p>
        <button onClick={this.onClick}>Refresh</button>
      </div>
    )
  }
}
