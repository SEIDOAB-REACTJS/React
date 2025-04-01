import React from 'react';

import '../lesson-steps/05-app-service/css/colors-fonts.css';
import '../lesson-steps/05-app-service/css/layout.css';
import '../lesson-steps/05-app-service/css/images.css';
import '../lesson-steps/05-app-service/css/table.css';

import { LibraryService } from "../services/library";

import { CoolList01, CoolList02 } from '../lesson-steps/05-app-service/components/cool-list';
import { CoolImages, CoolImages03, CoolImages04 } from '../lesson-steps/05-app-service/components/cool-images'
import { Header } from '../lesson-steps/05-app-service/components/header';

function App05a() {

  const [imgClicked, setImgClicked] = React.useState();
  
  const onClick = (e) => {

    setImgClicked(e.clickedImgSrc);
    console.log("Clicked from App", e.clickedImgSrc);
  }
  
  return (
    <>
    <Header message={imgClicked}/>
    <CoolImages onClick={onClick}/>
    <CoolList01/>
    </>
  );
}

export function App05b() {

  //example of using library service
  const _service = new LibraryService(localStorage);
  const _books = _service.readBooks(0,10, 'adventure');

  const [imgClicked, setImgClicked] = React.useState();
  
  const onClick = (e) => {

    setImgClicked(e.clickedImgSrc);
    console.log("Clicked from App", e.clickedImgSrc);
  }
  
  return (
    <>
    <Header message={imgClicked}/>
    <CoolImages onClick={onClick}/>
    <CoolList02 books={_books}/>
    </>
  );
}

export function App05c() {

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
    <CoolImages03 onClick={onClick}/>
    <CoolList02 books={books}/>
    </>
  );
}

export function App05d() {

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
    <CoolImages04 onClick={onClick} genre={['Adventure', 'Horror', 'SciFi', 'Computers', 'Animals', 'Children']}/>
    <CoolList02 books={books}/>
    </>
  );
}
export default App05a;
