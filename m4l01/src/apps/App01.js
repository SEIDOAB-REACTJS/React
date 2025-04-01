import '../css/flexbox_5.css'

import {HelloWorld01, HelloWorld01a} from '../lesson-steps/01-simple-components/components/01-hello-world';
import HelloWorld02 from '../lesson-steps/01-simple-components/components/02-hello-world';
import HelloWorld03 from '../lesson-steps/01-simple-components/components/03-class-components';
import { QuoteListFunc04,  QuoteListClass04} from '../lesson-steps/01-simple-components/components/04-quote-lists';
import { HelloFunc05,  HelloClass05a, HelloClass05b} from '../lesson-steps/01-simple-components/components/05-conditional-jsx';
import { ColoredBoxesClass, ColoredBoxesFunc } from '../lesson-steps/01-simple-components/components/colored-box';

//Adding a component
export function App01_01() {
  return (
    <>
    <HelloWorld01/>
    <HelloWorld01a/>
    </>
    );}


//Class and function components
export function App01_02() {
  return (
    <>
    <HelloWorld02/>
    <HelloWorld03/>
    </>
    );}
    
export function App01_03() {
  return (
    <>
    <ColoredBoxesFunc/>
    <ColoredBoxesClass/>
    </>
    );}

//Class and function components mixing javascript
export function App01_04() {
  return (
    <>
    <QuoteListFunc04/>
    <QuoteListClass04/>
    </>
    );}

//Class and function components conditional rendering in JSX
export function App01_05() {
  return (
    <>
    <HelloFunc05/>
    <HelloClass05a/>
    <HelloClass05b/>
    </>
    );}
