import React from 'react'
import { seedGenerator } from '../services/seido-helpers';

import jupiter1 from '../img/jupiter1.jpg';
import jupiter2 from '../img/jupiter2.jpg';
import jupiter3 from '../img/jupiter3.jpg';
import jupiter4 from '../img/jupiter4.png';
import jupiter5 from '../img/jupiter5.jpg';

export function CoolImages(props) {

  //how to get a random image from imports
  const _seeder = new seedGenerator();
  const _rndimg = _seeder.fromArray([jupiter1, jupiter2, jupiter3, jupiter4, jupiter5]);
  
  const onClick = (e) => {

    console.log(e.target.src);

    e.clickedImgSrc = e.target.src;
    if (props.onClick) props.onClick(e);
  }
  
  return (
    <div className="GridItemMain">
        <div className="FlexWrap">
            <div className="FlexItem">
                <div><img src={jupiter1} onClick={onClick}/></div>
                <p>
                    Adventure _books.
                </p>
            </div>
            <div className="FlexItem">
                <div><img src={jupiter2} onClick={onClick}/></div>
                <p>
                    Horror books.
                </p>
            </div>
        </div>
    </div>   
  )
}

export function CoolImages03(props) {

  //how to get a random image from imports
  const _seeder = new seedGenerator();
  const _rndimg = _seeder.fromArray([jupiter1, jupiter2, jupiter3, jupiter4, jupiter5]);
  
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
                <div><img src={jupiter1} onClick={onClick} data-genre='Adventure' data-id={1234}/></div>
                <p>
                    Adventure _books.
                </p>
            </div>
            <div className="FlexItem">
                <div><img src={jupiter2} onClick={onClick} data-genre='Horror' data-id={1234}/></div>
                <p>
                    Horror books.
                </p>
            </div>
        </div>
    </div>   
  )
}


export function CoolImages04(props) {

  //how to get a random image from imports
  const _seeder = new seedGenerator();
  const _rndimg = _seeder.fromArray([jupiter1, jupiter2, jupiter3, jupiter4, jupiter5]);
  
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
              <div><img src={_seeder.fromArray([jupiter1, jupiter2, jupiter3, jupiter4, jupiter5])} onClick={onClick} data-genre={g}/></div>
              <p>
                  {g} books.
              </p>
            </div>
          ))}

        </div>
    </div>   
  )
}