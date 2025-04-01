import React from 'react'
import { seedGenerator } from '../../../services/seido-helpers';

import jupiter1 from '../img/jupiter1.jpg';
import jupiter2 from '../img/jupiter2.jpg';
import jupiter3 from '../img/jupiter3.jpg';
import jupiter4 from '../img/jupiter4.png';
import jupiter5 from '../img/jupiter5.jpg';

export function CoolImages04(props) {

  const _imgs = [jupiter1, jupiter2, jupiter3, jupiter4, jupiter5];

  //how to get a random image from imports
  const _seeder = new seedGenerator();
  const _rndimg = _seeder.fromArray(_imgs);
  
  const onClick = (e) => {

    console.log(e.target.src);

    e.clickedImgSrc = e.target.src;
    e.page = e.target.dataset.page;
    if (props.onClick) props.onClick(e);
  }
  
  return (
    <div className="GridItemMain">
        <div className="FlexWrap">
          {props.pages.map ((g, index) => (

            <div key={index} className="FlexItem">
              <div><img src={_imgs[index%5]} onClick={onClick} data-page={g}/></div>
              <p>
                  {g}.
              </p>
            </div>
          ))}

        </div>
    </div>   
  )
}