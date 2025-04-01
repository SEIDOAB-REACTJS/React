import React from 'react'
import {Routes, Route } from "react-router";

import Home from '../pages/home';
import About from '../pages/about';
import Page1 from '../pages/page1';
import {Musicalbums} from '../pages/musicalbums';
import {Animals} from '../pages/animals';
import {AlbumView} from '../pages/albumview';


export function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/page1' element={<Page1/>}></Route>
        <Route path='/music' element={<Musicalbums/>}></Route>
        <Route path='/animals/:name/:type/:age' element={<Animals/>}></Route>
        <Route path='/albumview/:id' element={<AlbumView/>}></Route>
    </Routes>
  )
}
