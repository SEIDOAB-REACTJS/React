import React, {useEffect, useState} from 'react';

import { CoolList02 } from './cool-list';
import { CoolImages04 } from './cool-images'
import { Header } from './header';
import musicService from '../../../services/music-group-service';

export function CoolComp() {

  //example of using library service
  const service = new musicService(`https://seido-webservice-307d89e1f16a.azurewebsites.net/api`);

  const [imgClicked, setImgClicked] = React.useState();
  const [artists, setArtists] = useState({});
  
  useEffect(() => {

    (async () => {

      const service = new musicService(`https://seido-webservice-307d89e1f16a.azurewebsites.net/api`);
      const serviceData = await service.readArtistsAsync(0);

      setArtists(serviceData);
    })()
  }, [])
  //Empty dependency array: The effect runs only once after the initial render. useEffect(() => { // Runs only on the first render }, []);


  const onClick = async (e) => {

    setImgClicked(e.clickedImgSrc);
    console.log("Clicked from App", e.clickedImgSrc);

    if (e.page === 'Artists Page 0')
      {
        const serviceData = await service.readArtistsAsync(0);
        setArtists(serviceData);
      }
    else if (e.page === 'Artists Page 1')
      {
        const serviceData = await service.readArtistsAsync(1);
        setArtists(serviceData);
      }
    else if (e.page === 'Artists Page 2')
      {
        const serviceData = await service.readArtistsAsync(2);
        setArtists(serviceData);
      }
  }
  
  return (
    <>
    <Header message={imgClicked}/>
    <CoolImages04 onClick={onClick} pages={['Artists Page 0', 'Artists Page 1', 'Artists Page 2']}/>
    <CoolList02 books={artists}/>
    </>
  );
}
