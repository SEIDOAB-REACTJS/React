import React from 'react'
import { seedGenerator } from '../../../services/seido-helpers';

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
    props.setImgClicked(e.target.src);
    ;
    if (props.onClick) props.onClick(e);
  }
  
  return (
    <div className="GridItemMain">
        <div className="FlexWrap">
            <div className="FlexItem">
                <div><img src={_rndimg} onClick={onClick}/></div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Nisl tincidunt eget nullam non.
                </p>
            </div>
            <div className="FlexItem">
                <div><img src={jupiter2} onClick={onClick}/></div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Nisl tincidunt eget nullam non.
                </p>
            </div>
            <div className="FlexItem">
                <div><img src={jupiter3}  onClick={onClick}/></div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Nisl tincidunt eget nullam non.
                </p>
            </div>
            <div className="FlexItem">
                <div><img src={jupiter4}  onClick={onClick}/></div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Nisl tincidunt eget nullam non.
                </p>
            </div>
            <div className="FlexItem">
                <div><img src={jupiter5}  onClick={onClick}/></div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Nisl tincidunt eget nullam non.
                </p>
            </div>
        </div>
    </div>   
  )
}
