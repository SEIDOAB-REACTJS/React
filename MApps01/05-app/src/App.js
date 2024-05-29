import React from 'react';

import logo from './logo.svg';
import './App.css';
import './css/colors-fonts.css';
import './css/layout.css';
import './css/images.css';
import './css/table.css';

import { Book, LibraryService } from "./services/library";

import { CoolList, CoolList01, CoolList02 } from './components/cool-list';
import { CoolImages, CoolImages03 } from './components/cool-images'
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
    <CoolList01/>
    </>
  );
}

export function App02() {

  //example of using library service
  const _service = new LibraryService(localStorage);
  const books = _service.readBooks(0,10, 'adventure');

  const [imgClicked, setImgClicked] = React.useState();
  
  const onClick = (e) => {

    setImgClicked(e.clickedImgSrc);
    console.log("Clicked from App", e.clickedImgSrc);
  }
  
  return (
    <>
    <Header message={imgClicked}/>
    <CoolImages onClick={onClick}/>
    <CoolList02 books={books}/>
    </>
  );
}

export function App03() {

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
export default App;

/*
1. Create CoolList component using table-to-react.html as the template. The CoolList component shall use LibraryService
   to list first page with 10 books (page 0)
2. Lift LibraryService and list of books out of CoolList to App component level. CoolList shall take the list of books on page 0 
   as a property (props)
3. Modify code in App component and CoolImages so a click in Adventure image lists 10 adventure books, and a click on Horror
   shall list 10 Horror books

*/
