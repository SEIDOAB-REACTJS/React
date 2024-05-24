import React from 'react'
import { seedGenerator } from '../services/seido-helpers';

import jupiter1 from '../img/jupiter1.jpg';
import jupiter2 from '../img/jupiter2.jpg';
import jupiter3 from '../img/jupiter3.jpg';
import jupiter4 from '../img/jupiter4.png';
import jupiter5 from '../img/jupiter5.jpg';

export function CoolImages() {

  //how to get a random image from imports
  const _seeder = new seedGenerator();
  const _rndimg = _seeder.fromArray([jupiter1, jupiter2, jupiter3, jupiter4, jupiter5]);

  return (
    <div className="FlexWrap">
        <div className="FlexItem">
            <div><img src={_rndimg}/></div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Nisl tincidunt eget nullam non.
            </p>
        </div>
        <div className="FlexItem">
            <div><img src={jupiter2}/></div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Nisl tincidunt eget nullam non.
            </p>
        </div>
        <div className="FlexItem">
            <div><img src={jupiter3}/></div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Nisl tincidunt eget nullam non.
            </p>
        </div>
        <div className="FlexItem">
            <div><img src={jupiter4}/></div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Nisl tincidunt eget nullam non.
            </p>
        </div>
        <div className="FlexItem">
            <div><img src={jupiter5}/></div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Nisl tincidunt eget nullam non.
            </p>
        </div>
    </div>   
  )
}
