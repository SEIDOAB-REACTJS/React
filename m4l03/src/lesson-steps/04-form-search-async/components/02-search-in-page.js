import React, {useState} from 'react';
import musicService from '../../../services/music-group-service';
import {FormSearch} from './01-form-search';

export function SearchInPage02() {

    const [albums, setAlbums] = useState({});

    //React event bubbling, onSave and onUndo called from FormValidation05 (events upwards flow)
    const onSave = async (e) => 
    {
      console.log (`onSave invoked`);
      
      const service = new musicService(`https://seido-webservice-307d89e1f16a.azurewebsites.net/api`);
      const a = await service.readAlbumsAsync (0, true, e.searchFilter);

      setAlbums(a);
    }  

    const onUndo = (e) => 
    {
      console.log (`onUndo invoked`);
    }  

    return (
      <>
        <ul>
          {albums.pageItems?.map((a) => <li>{a.name}</li>)}          
        </ul>
       <FormSearch searchFilter="" onSave={onSave} onUndo={onUndo}/>
      </>
    );
  }
