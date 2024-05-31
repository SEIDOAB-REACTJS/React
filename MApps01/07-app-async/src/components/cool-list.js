import React from 'react'
import { Book, LibraryService } from "../services/library";

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
        
        {props.books.pageItems?.map((b,index) => 
              <div key={index} className="trFluid">
              <div className="trFluid_Grouping2">
                <div className="trFluid_Grouping1">
                  <div className="tdFluent">{b.title}</div>

                </div>
                <div className="trFluid_Grouping1">
                  <div className="tdFluent">{b.firstName} {b.lastName}</div>
                  <div className="tdFluent">{b.birthDay}</div>
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

