import '../css/flexbox_5.css'

import { TextCounterClass01, TextCounterFunc01 } from '../lesson-steps/03-events-and-states/components/01-stateless';
import { TextCounterClass02, TextCounterFunc02 } from '../lesson-steps/03-events-and-states/components/02-events';
import { TextCounterClass03, TextCounterFunc03 } from '../lesson-steps/03-events-and-states/components/03-states';
import { ColorBoxesClass04, ColorBoxesFunc04 } from '../lesson-steps/03-events-and-states/components/04-colors';
import { ColorBoxesClass04a, ColorBoxesFunc04a } from '../lesson-steps/03-events-and-states/components/04a-colors-exAnsw';

//Stateless
export function App03_01() {
  return (
    <>
      <TextCounterFunc01 />
      <TextCounterFunc01 text="Hello, my name is Martin"/>
    </>
    );}

//Add events
export function App03_02() {
  return (
    <>
    <TextCounterFunc02/>
    <TextCounterFunc02 text="Hello, my name is Martin"/>
    </>
    );}

//Add states
export function App03_03() {
  return (
    <>
    <TextCounterFunc03/>
    <TextCounterFunc03 text="Hello, my name is Martin"/>
    </>
    );}


//Color exercise 
export function App03_04() {
  return (
    <>
    <ColorBoxesFunc04/>
    </>
    );}

//Color exercise - Answers
export function App03_05() {
  return (
    <>
    <ColorBoxesFunc04a/>
    <ColorBoxesClass04a/>
    </>
    );}