import React from 'react';

import logo from './logo.svg';
import './App.css';
import './css/colors-fonts.css';
import './css/layout.css';
import './css/images.css';

import { CoolList } from './components/cool-list';
import { CoolImages } from './components/cool-images'
import { Header } from './components/header';

function App() {

  const [imgClicked, setImgClicked] = React.useState();
  
  const onClick = (e) => {

    setImgClicked(e.clickedImgSrc);
    console.log("Clicked from App", e.clickedImgSrc);
  }
  
  return (
    <>
    <Header message={imgClicked}/>
    <CoolImages onClick={onClick}/>
    <CoolList/>
    </>
  );
}

export default App;
