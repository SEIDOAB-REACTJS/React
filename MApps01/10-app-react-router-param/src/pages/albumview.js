import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";

import musicService from '../services/music-group-service'

export function AlbumView() {

  const params = useParams();
  const [album, setAlbums] = useState({});

  useEffect(() => {

    (async () => {

        const service = new musicService(`https://seido-webservice-307d89e1f16a.azurewebsites.net/api`);
        const a = await service.readAlbumAsync (params.id)

        setAlbums(a)
    })();

  }, [params.id])

  return (
    <>
        <h1>Albumview</h1>
        <p>You clicked on Album with id: {params.id} </p>
        <ul>
            <li>{album.name}</li>
            <li>{album.releaseYear}</li>
            <li>{album.copiesSold}</li>
        </ul>
    </>
  )
}