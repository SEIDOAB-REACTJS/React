import React from 'react'
import {Routes, Route } from "react-router-dom";
import {Home} from '../pages/home';
import {About} from '../pages/about';
import {Animals} from '../pages/animals';
import {Albums} from '../pages/albums';

export function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/animals" element={<Animals/>}/>

        <Route path="/albums" element={<Albums/>}/>
        <Route path="/albums/:searchFilter" element={<Albums/>}/>
        
        <Route path="/albums/:searchFilter" render={(props) => (
            <Albums key={props.match.params.pageid} {...props} />)} />

    </Routes>
  )
}
