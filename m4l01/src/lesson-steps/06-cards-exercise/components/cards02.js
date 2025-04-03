import React from 'react'

export function Cards02() {
  return (
    <div className="container px-4 py-4" id="home">
    <div className="d-flex flex-wrap justify-content-between bg-body-tertiary p-5 rounded">
    {
    
      [1,2].map((item) => (
      <div className="card m-3" style={{width: "18rem" }}>
        <img src="/imgs/img1.png" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>))

    }
    </div>
  </div>
  )
}

//Excercies:
//1. Change above code to print out 6 cards
//2. Change above code so the images presented is img1 to img6. Use string interpolation and item in map(...), 
//   {`/imgs/img${item}.png`}
//3. Change above code so the images names to be presented is given in props.imgs, use props?.imgs?.map(...)
