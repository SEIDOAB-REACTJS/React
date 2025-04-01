import React from 'react'

export function TableTemplate03(props) {
  return (
    <>
      <h1>Table template using bootstrap 02</h1>
      <h2>Adding table data</h2>

      <div className="row mb-2 text-center">
      { 
        props?.headers?.map((item, idx) => 
            <>
            <div key={idx} className="col-md-2 themed-grid-head-col">{item}</div>
            </>
          )
      }
      </div>

      {
          props?.initialData?.map((row, idx) => 
            <div key={row.id} data-rowid={row.id} className="row mb-2 text-center" >
              <div className="col-md-2 themed-grid-col">{row?.firstName}</div>
              <div className="col-md-2 themed-grid-col">{row?.lastName}</div>
              <div className="col-md-2 themed-grid-col">{row?.address?.city}</div>
              <div className="col-md-2 themed-grid-col">{row?.address?.country}</div>
            </div> )
      }
    </>)}
