import React from 'react'
import jupiter1 from '../img/jupiter1.jpg';
import jupiter2 from '../img/jupiter2.jpg';
import jupiter3 from '../img/jupiter3.jpg';
import jupiter4 from '../img/jupiter4.png';
import jupiter5 from '../img/jupiter5.jpg';

export function CoolImages() {
  return (
    <div className="FlexWrap">
        <div className="FlexItem">
            <div><img src={jupiter1}/></div>
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
