import React, {useState} from 'react';
import musicService from '../services/music-group-service';
import {FormSearch} from '../components/form-search';

export function Albums() {

    const [albums, setAlbums] = useState({});

    //React event bubbling, onSave and onUndo called from FormValidation05 (events upwards flow)
    const onSave = async (e) => 
    {
      console.log (`onSave invoked`);
      
      const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);
      const a = await service.readAlbumsAsync (0, true, e.searchFilter);

      setAlbums(a);
    }  

    const onUndo = (e) => 
    {
      console.log (`onUndo invoked`);
    }  

    return (
      <>
        <FormSearch searchFilter="" onSave={onSave} onUndo={onUndo}/>
        <ul>
          {albums.pageItems?.map((a) => <li>{a.name}</li>)}          
        </ul>
      </>
    );
  }
