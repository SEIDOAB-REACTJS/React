import React from 'react'
import { Book, LibraryService } from "../../../services/library";
import {JournalRichtext} from 'react-bootstrap-icons'

export function BookList() {

  const _service = new LibraryService(localStorage);
  const [books, setBooks] = React.useState(_service.readBooks(0,10, 'adventure'));

  const onClick = (e) => {

    setBooks(_service.readBooks(0,10, e.genre))
  }

  return (
    <div className="container px-4 py-4" id="list-of-items">
    <h2 className="pb-2 border-bottom">
        <JournalRichtext className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"/>
         List of Books</h2>


    <p>Below are some of the worlds most famous books.</p>
    <p>Subscribe to the LibraryService</p>


    <ListSearch onClick={onClick}/>
    <List books={books}/>
    <ListPager/>



    </div>
  )
}


export function ListSearch(props) {

    const onClick = (e) => {

       e.genre =  document.getElementById("search").value;
       if (props.onClick) props.onClick(e);
    }

  return (
    <div className="row mb-1 text-center">
    <div className="col-md-8 ">
      <form className="d-flex mt-3 mt-lg-0" role="search">
        <input id='search' className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" onClick={onClick} >Search</button>
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


export function List(props) {
    return (
        <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
        <div className="col-md-7 col-lg-10">
            <div className="row mb-2 text-center">
              <div className="col-md-6 themed-grid-head-col">Title</div>
              <div className="col-md-3 themed-grid-head-col">Genre</div>
              <div className="col-md-3 themed-grid-head-col">Author</div>
            </div>

            {props.books.pageItems.map((b, index) => (
                <div key={index} className="row mb-2 text-center">
                <div className="col-md-6 themed-grid-col">
                    {b.title}
                </div>
                <div className="col-md-3 themed-grid-col">{b.genre}</div>

                <div className="col-md-3 themed-grid-col">
                    {b.author}
                </div>
                </div>
            ))} 


        </div>
      </div>
    )
  }
