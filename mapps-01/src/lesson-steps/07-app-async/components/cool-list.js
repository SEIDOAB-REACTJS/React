import React from 'react'
import { Book, LibraryService } from "../../../services/library";

export function CoolList02(props) {

  return (
    <div className="GridItemMain">

    <div className="tableFluid">

        <div className="theadFluid">
          <div className="trFluid">
            <div className="trFluid_Grouping2">
              <div className="trFluid_Grouping1">
                <div className="tdFluent">Artist</div>
              </div>
              <div className="trFluid_Grouping1">
                <div className="tdFluent">Birthday</div>
              </div>
            </div>
          </div>
        </div>
        <div className="tbodyFluid">
        
        {props.books.pageItems?.map((b,index) => 
              <div key={index} className="trFluid">
              <div className="trFluid_Grouping2">
                <div className="trFluid_Grouping1">
                <div className="tdFluent">{b.firstName} {b.lastName}</div>

                </div>
                <div className="trFluid_Grouping1">
                  <div className="tdFluent">{b.birthDay}</div>
                </div>
              </div>
            </div>
          )}
  
      </div>     
    </div>

  </div>
  )
}

