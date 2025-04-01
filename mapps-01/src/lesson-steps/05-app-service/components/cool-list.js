import React from 'react'
import { Book, LibraryService } from "../../../services/library";

export function CoolList() {

  //example of using library service
  const _service = new LibraryService(localStorage);
  const _books = _service.readBooks(0,10, 'adventure');

  return (
    <div>Cool List</div>
  )
}


export function CoolList01() {

  //example of using library service
  const _service = new LibraryService(localStorage);
  const _books = _service.readBooks(0,10, 'adventure');

  return (
    <div className="GridItemMain">

    <div className="tableFluid">

        <div className="theadFluid">
          <div className="trFluid">
            <div className="trFluid_Grouping2">
              <div className="trFluid_Grouping1">
                <div className="tdFluent">Book title</div>
              </div>
              <div className="trFluid_Grouping1">
                <div className="tdFluent">Author</div>
                <div className="tdFluent">Year published</div>
                <div className="tdFluent">Million copies sold</div>
                <div className="tdFluent">Genre</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="tbodyFluid">
        
        {_books.pageItems.map((b,index) => 
              <div key={index} className="trFluid">
              <div className="trFluid_Grouping2">
                <div className="trFluid_Grouping1">
                  <div className="tdFluent">{b.title}</div>

                </div>
                <div className="trFluid_Grouping1">
                  <div className="tdFluent">{b.author}</div>
                  <div className="tdFluent">{b.publishedYear}</div>
                  <div className="tdFluent">{b.millionsSold}</div>
                  <div className="tdFluent">{b.genre}</div>
                </div>
              </div>
            </div>
          )}
  
      </div>     
    </div>

  </div>
  )
}

export function CoolList02(props) {

  return (
    <div className="GridItemMain">

    <div className="tableFluid">

        <div className="theadFluid">
          <div className="trFluid">
            <div className="trFluid_Grouping2">
              <div className="trFluid_Grouping1">
                <div className="tdFluent">Book title</div>
              </div>
              <div className="trFluid_Grouping1">
                <div className="tdFluent">Author</div>
                <div className="tdFluent">Year published</div>
                <div className="tdFluent">Million copies sold</div>
                <div className="tdFluent">Genre</div>
              </div>
            </div>
          </div>
        </div>
        <div className="tbodyFluid">
        
        {props.books.pageItems.map((b,index) => 
              <div key={index} className="trFluid">
              <div className="trFluid_Grouping2">
                <div className="trFluid_Grouping1">
                  <div className="tdFluent">{b.title}</div>

                </div>
                <div className="trFluid_Grouping1">
                  <div className="tdFluent">{b.author}</div>
                  <div className="tdFluent">{b.publishedYear}</div>
                  <div className="tdFluent">{b.millionsSold}</div>
                  <div className="tdFluent">{b.genre}</div>
                </div>
              </div>
            </div>
          )}
  
      </div>     
    </div>

  </div>
  )
}

