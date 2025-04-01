import React from 'react'

export function TableTemplate01() {
  return (
    <>
      <h1>Table template using bootstrap 01</h1>
      <h2>Bootstrap starting point</h2>

      <div className="row mb-2 text-center">
          <div className="col-md-4 themed-grid-head-col">Head2</div>
          <div className="col-md-2 themed-grid-head-col">Head2</div>
          <div className="col-md-1 themed-grid-head-col">Head3</div>
      </div>
  
      <div className="row mb-2 text-center" >

          <div className="col-md-4 themed-grid-col">
            Cell1
          </div>

          <div className="col-md-2 themed-grid-col">
            Cell2
          </div>

          <div className="col-md-1 themed-grid-col">
            Cell3
          </div>
      </div>
    </>
  )
}