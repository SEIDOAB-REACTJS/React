import React from 'react'
import {Routes, Route } from "react-router-dom";

import Home from '../pages/home';
import About from '../pages/about';
import Page1 from '../pages/page1';


export function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/page1' element={<Page1/>}></Route>
    </Routes>
  )
}
