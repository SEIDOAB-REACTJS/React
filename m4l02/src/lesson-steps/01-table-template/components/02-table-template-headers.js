import React from 'react'

export function TableTemplate02(props) {
  return (
    <>
      <h1>Table template using bootstrap 02</h1>
      <h2>Adding table header</h2>

      <div className="row mb-2 text-center">
      { 
        props?.headers?.map((item, idx) => 
            <>
            <div key={idx} className="col-md-2 themed-grid-head-col">{item}</div>
            </>
          )
      }
      </div>

      <div className="row mb-2 text-center" >
          <div className="col-md-2 themed-grid-col">
            Cell1
          </div>

          <div className="col-md-2 themed-grid-col">
            Cell2
          </div>

          <div className="col-md-2 themed-grid-col">
            Cell3
          </div>

          <div className="col-md-2 themed-grid-col">
            Cell4
          </div>
      </div>
    </>)}
