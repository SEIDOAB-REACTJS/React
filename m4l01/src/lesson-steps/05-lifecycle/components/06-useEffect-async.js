import React, { Component, useState, useEffect, setState } from "react";
import musicService from '../../../services/music-group-service';

export function ReadWebApiFunc06() {

  const [wapiInfo, setWapiInfo] = useState();
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
        setWapiInfo(info);
      })();}
  , []); //Empty array , []); as dependancies causes useEffect to run only once at component mount
  //);   // ); no dependancies causes useEffect to run at every rerender. 
         // as useEffect also update state setWapiInfo(...) which in turn causes render it becomes in this case an endless loop

  const onClick = async () => {

    const info = await service.readInfoAsync();
    setWapiInfo(info);
    console.log('Clicked refesh button in func component');
  }

  return (
    <div>
      <h1>WebApi info</h1>
        <ul>
          <li>nrSeededMusicGroups: {wapiInfo?.db?.nrSeededMusicGroups} </li>
          <li>nrUnseededMusicGroups: {wapiInfo?.db?.nrUnseededMusicGroups} </li>
          <li>nrSeededAlbums: {wapiInfo?.db?.nrSeededAlbums} </li>
          <li>nrUnseededAlbums: {wapiInfo?.db?.nrUnseededAlbums} </li>
          <li>nrSeededArtists: {wapiInfo?.db?.nrSeededArtists} </li>
          <li>nrUnseededArtists: {wapiInfo?.db?.nrUnseededArtists} </li>
        </ul>
        <button onClick={onClick}>Refresh</button>
    </div>
  );
}


export class ReadWebApiClass06 extends Component {
  constructor(props) {
    super(props);          //Needs to be the 1st call

    this.service = new musicService(`https://seido-webservice-307d89e1f16a.azurewebsites.net/api`);

    //states, in class component, initialized, here with an empty object
    this.state = {wapiInfo: {}}

    //Eventhandler, in class component
    this.onClick = this.onClick.bind(this);
  }

  //Eventhandler, in class
  async onClick(e) {
    const info = await this.service.readInfoAsync();

    this.setState({wapiInfo: info});
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
      this.setState({wapiInfo: info});
    })();
  }

  render() {
    return (
      <div>
        <h1>WebApi info</h1>
        <ul>
          <li>nrSeededMusicGroups: {this.state.wapiInfo?.db?.nrSeededMusicGroups} </li>
          <li>nrUnseededMusicGroups: {this.state.wapiInfo?.db?.nrUnseededMusicGroups} </li>
          <li>nrSeededAlbums: {this.state.wapiInfo?.db?.nrSeededAlbums} </li>
          <li>nrUnseededAlbums: {this.state.wapiInfo?.db?.nrUnseededAlbums} </li>
          <li>nrSeededArtists: {this.state.wapiInfo?.db?.nrSeededArtists} </li>
          <li>nrUnseededArtists: {this.state.wapiInfo?.db?.nrUnseededArtists} </li>
        </ul>
        <button onClick={this.onClick}>Refresh</button>
      </div>
    )
  }
}
