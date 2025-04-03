import React from 'react'
//  style="width: 18rem;" ==> style={{width: "18rem" }} 
//  class ==> className

// private images (in src/imgs)
//  <img src="../../../imgs/img1.png" ==> <img src={img1}

// public images (in public/imgs)
//  <img src="../../../imgs/img1.png" ==> <img src="/imgs/img1.png"

import img1 from '../../../imgs/img1.png';

export function Cards01() {
  return (
    <div className="container px-4 py-4" id="home">
    <div className="d-flex flex-wrap justify-content-between bg-body-tertiary p-5 rounded">
      <div className="card m-3" style={{width: "18rem" }}>
        <img src={img1} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card m-3" style={{width: "18rem" }}>
        <img src="/imgs/img2.png" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card m-3" style={{width: "18rem" }}>
        <img src="/imgs/img3.png" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card m-3" style={{width: "18rem" }}>
        <img src="/imgs/img4.png" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
  )
}

//Exercises
//1. Make a create components of the album_cards.html including and contained in <div class="container px-4 py-4" id="cards">

//  style="width: 18rem;" ==> style={{width: "18rem" }} 
//  class ==> className

// public images (in public/imgs)
//  <img src="../../../imgs/img1.png" ==> <img src="/imgs/img1.png"
