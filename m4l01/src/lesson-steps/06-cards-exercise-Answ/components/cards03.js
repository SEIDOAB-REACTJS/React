import React from 'react'

export function Cards03(props) {

  const titleClick = (e) => {

    console.log(e.target.innerText)
  }

  const imgClick  = (e) => {

    console.log(e.target.src)
  }

  return (
    <div className="container px-4 py-4" id="home">
    <div className="d-flex flex-wrap justify-content-between bg-body-tertiary p-5 rounded">
    {
    
      props?.imgs?.map((item, index) => (
      <div className="card m-3" style={{width: "18rem" }}>
        <img src={`/imgs/${item}`} className="card-img-top" alt="..." onClick={imgClick}/>
        <div className="card-body">
          <h5 className="card-title" onClick={titleClick}>{props?.titles[index]}</h5>
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
//3. Change above code so card-titles are provided as an array in props.titles. props?.imgs?.map((item, index) gives an idx (0,1)
//   which can be used to access props.titles[idx]
//4. Add click event to Card title, another click event to the image. Write to the console, the card title clicked, resp the image url presentent