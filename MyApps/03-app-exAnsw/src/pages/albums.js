import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import musicService from '../services/music-group-service';
import {FormSearch} from '../components/form-search';

export function Albums(props) {

  const {searchFilter}  = useParams();
  const [albums, setAlbums] = useState({});
  const [filter, setFilter] = useState(searchFilter || "");
 
  //Needed if param update only with react-router as
  //react-router do not rerender if only param has changed
  useEffect(() => {

    //To pre-load with filtered albums 
    (async ()=> {
      const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);
      const a = await service.readAlbumsAsync (0, true, searchFilter);
      setAlbums(a);
    })();
   
   //readWebApi();
   setFilter(searchFilter);
  }, [searchFilter]);

  
  
    //React event bubbling, onSave and onUndo called from FormValidation05 (events upwards flow)
    const onSave = async (e) => 
    {
      console.log (`onSave invoked`);
      
      const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);
      const a = await service.readAlbumsAsync (0, true, e.searchFilter);

      setAlbums(a);
      setFilter(e.searchFilter);
    }  

    const onUndo = (e) => 
    {
      console.log (`onUndo invoked`);
    }  

    return (
      <>
        <FormSearch searchFilter={filter} onSave={onSave} onUndo={onUndo}/>
        <ul>
          {albums.pageItems?.map((a) => <li>{a.name}</li>)}          
        </ul>
      </>
    );
  }
