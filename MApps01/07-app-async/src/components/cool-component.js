import React, {useEffect, useState} from 'react';

import { CoolList02 } from './cool-list';
import { CoolImages04 } from './cool-images'
import { Header } from './header';
import musicService from '../services/music-group-service';

export function CoolComp() {

  //example of using library service
  const artist_service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);

  const [imgClicked, setImgClicked] = React.useState();
  const [artists, setArtists] = useState({});
  
  useEffect(() => {

    (async () => {
      const serviceData = await artist_service.readArtistsAsync(0);
      setArtists(serviceData);
    })()
  }, [artist_service])


  const onClick = async (e) => {

    setImgClicked(e.clickedImgSrc);
    console.log("Clicked from App", e.clickedImgSrc);

    if (e.genre === 'Artists Page 0')
      {
        const serviceData = await artist_service.readArtistsAsync(0);
        setArtists(serviceData);
      }
    else if (e.genre === 'Artists Page 1')
      {
        const serviceData = await artist_service.readArtistsAsync(1);
        setArtists(serviceData);
      }
  }
  
  return (
    <>
    <Header message={imgClicked}/>
    <CoolImages04 onClick={onClick} genre={['Artists Page 0', 'Artists Page 1']}/>
    <CoolList02 books={artists}/>
    </>
  );
}
