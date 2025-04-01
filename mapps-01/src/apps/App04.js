import React from 'react';

import '../lesson-steps/04-app/css/colors-fonts.css';
import '../lesson-steps/04-app/css/layout.css';
import '../lesson-steps/04-app/css/images.css';

import {CoolImages} from '../lesson-steps/04-app/components/cool-images'
import { Header } from '../lesson-steps/04-app/components/header';

function App04() {

  const [imgClicked, setImgClicked] = React.useState();
  
  const onClick = (e) => {

    setImgClicked(e.clickedImgSrc);
    console.log("Clicked from App", e.clickedImgSrc);
  }
  
  return (
    <>
    <Header message={imgClicked}/>
    <CoolImages setImgClicked={setImgClicked}/>
    </>
  );
}

export default App04;
