import React from 'react'
import {Save, ArrowCounterclockwise} from 'react-bootstrap-icons'

export function FormAnimal01(props) {

  const animal = props.animal;

  const onSave = (e) => 
  { 
    //We are going to add validation here later
    e.animal = animal;
    props.onSave(e);
  }  

  return (
    <>
      <div className="container px-4 py-4" id="edit-item">
        <h1>
           Edit details of my pet {props.animal.name} 
           <button className="btn btn-primary-outline" onClick={onSave}>
            <Save className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"/>
          </button>
          <button className="btn btn-primary-outline" onClick={props.onUndo}>
            <ArrowCounterclockwise className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"/>
          </button>
        </h1>
        <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
          <div className="col-md-7 col-lg-8">
            <form className="needs-validation">
              <div className="row g-3">

                <div className="col-sm-4">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" value={animal.name} required/>
                </div>
                <div className="col-sm-4">
                  <label htmlFor="type" className="form-label">Type</label>
                  <input type="text" className="form-control" id="type" value={animal.type} required/>
                </div>
                <div className="col-sm-4">
                  <label htmlFor="age" className="form-label">Type</label>
                  <input type="number" className="form-control" id="age" value={animal.age} required/>
                </div>

              </div>
            </form>            
          </div>
        </div>
      </div>
    </>
  )
}
