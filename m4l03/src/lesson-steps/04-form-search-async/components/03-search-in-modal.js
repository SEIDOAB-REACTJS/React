import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

import musicService from '../../../services/music-group-service';
import {FormSearchModal} from './01-form-search';

export function SearchInModal03() {

    const [albums, setAlbums] = useState({});
  
    //#region needed for bootstrap Modal
    const [show, setShow] = useState(false);
    const showModal = () => setShow(true);
    //#endregion

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
        <Button variant="primary" onClick={showModal}>Search</Button>
        <FormSearchModal searchFilter="" show={show} setShow={setShow} onSave={onSave} onUndo={onUndo}/>

      </>
    );
  }