import React from 'react'
import { useParams } from 'react-router-dom';


export function AlbumView() {
  const params  = useParams();

  return (
    <>
        <h1>Albumview</h1>
        <p>You clicked on album with id: {params.id}</p>
    </>
  )
}
