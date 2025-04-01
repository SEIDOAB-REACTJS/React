import React from 'react'
import { seedGenerator } from '../../../services/seido-helpers';

import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';
import img4 from '../img/img4.png';
import img5 from '../img/img5.png';
import img6 from '../img/img6.png';

export function CoolImages(props) {

  const onClick = (e) => {

    console.log(e.target.src);

    e.clickedImgSrc = e.target.src;
    if (props.onClick) props.onClick(e);
  }
  
  return (
    <div className="GridItemMain">
        <div className="FlexWrap">
            <div className="FlexItem">
                <div><img src={img1} onClick={onClick}/></div>
                <p>
                    Adventure _books.
                </p>
            </div>
            <div className="FlexItem">
                <div><img src={img1} onClick={onClick}/></div>
                <p>
                    Adventure _books.
                </p>
            </div>
        </div>
    </div>   
  )
}

export function CoolImages03(props) {

  const _seeder = new seedGenerator();  
  const onClick = (e) => {

    console.log(e.target.src);

    e.clickedImgSrc = e.target.src;
    e.genre = e.target.dataset.genre;
    if (props.onClick) props.onClick(e);
  }
  
  return (
    <div className="GridItemMain">
        <div className="FlexWrap">
            <div className="FlexItem">
                <div><img src={_seeder.fromArray([img1, img2, img3, img4, img5, img6])} onClick={onClick} data-genre='Adventure' data-id={1234}/></div>
                <p>
                    Adventure _books.
                </p>
            </div>
            <div className="FlexItem">
                <div><img src={_seeder.fromArray([img1, img2, img3, img4, img5, img6])} onClick={onClick} data-genre='Horror' data-id={1234}/></div>
                <p>
                    Horror books.
                </p>
            </div>
        </div>
    </div>   
  )
}


export function CoolImages04(props) {

  const _imgGenre = [
    {genre: 'Adventure', img: img4}, {genre: 'Horror', img: img2}, {genre: 'SciFi', img: img5}, 
    {genre: 'Computers', img: img6}, {genre: 'Animals', img: img3}, {genre: 'Children', img: img1}]
  
  const onClick = (e) => {

    console.log(e.target.src);

    e.clickedImgSrc = e.target.src;
    e.genre = e.target.dataset.genre;
    if (props.onClick) props.onClick(e);
  }
  
  return (
    <div className="GridItemMain">
        <div className="FlexWrap">
          {props.genre.map (g => (

            <div className="FlexItem">
              <div><img src={_imgGenre.find((e) => e.genre.toLowerCase() === g.toLowerCase()).img} onClick={onClick} data-genre={g}/></div>
              <p>
                  {g} books.
              </p>
            </div>
          ))}

        </div>
    </div>   
  )
}