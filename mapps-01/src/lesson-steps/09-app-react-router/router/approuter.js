import React from 'react'
import {Routes, Route } from "react-router";

import Home from '../pages/home';
import About from '../pages/about';
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';
import Page3 from '../pages/page3';
import {Musicalbums} from '../pages/musicalbums';
import {Animals} from '../pages/animals';


export function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/page1' element={<Page1/>}></Route>
        <Route path='/page2' element={<Page2/>}></Route>
        <Route path='/page3' element={<Page3/>}></Route>
        <Route path='/music' element={<Musicalbums/>}></Route>
        <Route path='/animals' element={<Animals/>}></Route>
    </Routes>
  )
}
