import React from 'react'
import {VinylFill, MusicPlayerFill, MusicNoteList, JournalRichtext} from 'react-bootstrap-icons'

export function Musicbands() {
  return (
    <div className="container px-4 py-4" id="list-of-items">
    <h2 className="pb-2 border-bottom">
        <JournalRichtext className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"/>
         List of Books</h2>


    <p>Below are some of the worlds most famous books.</p>
    <p>Subscribe to the LibraryService</p>


    <ListSearch/>
    <List/>
    <ListPager/>



    </div>
  )
}


export function ListSearch() {
  return (
    <div className="row mb-1 text-center">
    <div className="col-md-8 ">
      <form className="d-flex mt-3 mt-lg-0" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
  )
}

export function ListPager() {
  return (
    <nav aria-label="Standard pagination example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#list-of-friends" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li className="page-item"><a className="page-link" href="#list-of-friends">1</a></li>
        <li className="page-item"><a className="page-link" href="#list-of-friends">2</a></li>
        <li className="page-item"><a className="page-link" href="#list-of-friends">3</a></li>
        <li className="page-item">
          <a className="page-link" href="#list-of-friends" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}


export function List() {
    return (
        <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
        <div className="col-md-7 col-lg-10">
            <div className="row mb-2 text-center">
              <div className="col-md-10 themed-grid-head-col">Book</div>
              <div className="col-md-2 themed-grid-head-col">
                <a  href="#add-edit-artist" className="btn btn-success btn-sm m-1" type="button">New</a>
              </div>
            </div>
            <div className="row mb-2 text-center">
              <div className="col-md-10 themed-grid-col">
                <a href="#view-group">
                  AC/DC
                </a>
              </div>
              <div className="col-md-2 themed-grid-col">
                <a href="#add-edit-friend"  className="btn btn-secondary btn-sm m-1" type="button">Edit</a>
  
                <button type="button" className="btn btn-danger btn-sm m-1" data-bs-toggle="modal" data-bs-target="#dangerModal"
                    data-modal-body="Should NNN be deleted?"
                    data-seido-modal-post-data="123-123" data-seido-modal-post-url="./index">
                    Del
                </button>
              </div>
            </div>
        </div>
      </div>
    )
  }
