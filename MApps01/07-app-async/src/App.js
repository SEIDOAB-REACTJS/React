import React from 'react';

import logo from './logo.svg';
import './App.css';
import './css/colors-fonts.css';
import './css/layout.css';
import './css/images.css';
import './css/table.css';

import { Book, LibraryService } from "./services/library";

import { CoolList, CoolList01, CoolList02 } from './components/cool-list';
import { CoolImages, CoolImages03, CoolImages04 } from './components/cool-images'
import { Header } from './components/header';

export function App() {

  //example of using library service
  const _service = new LibraryService(localStorage);

  const [imgClicked, setImgClicked] = React.useState();
  const [books, setBooks] = React.useState(_service.readBooks(0,10, 'adventure'));
  
  const onClick = (e) => {

    setImgClicked(e.clickedImgSrc);
    console.log("Clicked from App", e.clickedImgSrc);

    setBooks(_service.readBooks(0,10, e.genre))
  }
  
  return (
    <>
    <Header message={imgClicked}/>
    <CoolImages04 onClick={onClick} genre={['Artists', 'Albums']}/>
    <CoolList02 books={books}/>
    </>
  );
}
export default App;
