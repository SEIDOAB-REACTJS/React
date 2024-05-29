import React from 'react'
import {VinylFill, MusicPlayerFill, MusicNoteList} from 'react-bootstrap-icons'

export function About() {
  return (
    <>
    <div className="container px-4 py-4" id="webapi-info">
      <h2 className="pb-2 border-bottom">About Page</h2>
      <p>Below you see an overview of the content presented by the WebApi. Click on the link to see details. </p>

      <AboutContent/>
    </div>
    </>
  )
}

export function AboutContent() {
  
  return (

  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4 py-5">
    <div className="col d-flex align-items-start">
    <VinylFill className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"/>
      <div>
        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Music groups</h3>
        <p>253 music groups</p>
        <a href="#list-of-friends" className="btn btn-primary">
          See details
        </a>    
      </div>
    </div>
    <div className="col d-flex align-items-start">
    <MusicPlayerFill className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"/>
      <div>
        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Albums</h3>
        <p>1050 albums</p>
        <a href="#list-of-friends" className="btn btn-primary">
          See details
        </a>    
      </div>
    </div>
    <div className="col d-flex align-items-start">
    <MusicNoteList className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"/>
      <div>
        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Artists</h3>
        <p>135 Artists</p>
        <a href="#list-of-friends" className="btn btn-primary">
          See details
        </a>    
      </div>
    </div>
</div>);
}
