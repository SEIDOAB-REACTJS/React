import '../css/flexbox_5.css'

import { GreetingsFunc01, GreetingsClass01 } from '../lesson-steps/04-dataflow/components/01-greetings';
import { QuoteListClass02, QuoteListFunc02 } from '../lesson-steps/04-dataflow/components/02-quote-lists';
import { GreetQuoteFunc03, GreetQuoteClass03 } from '../lesson-steps/04-dataflow/components/03-higher-level-components';
import { GreetQuoteFunc04, GreetQuoteClass04 } from '../lesson-steps/04-dataflow/components/04-higher-level-props';
import { GreetQuoteFunc05, GreetQuoteClass05 } from '../lesson-steps/04-dataflow/components/05-event-lifting';
import { GreetQuoteFunc06, GreetQuoteClass06 } from '../lesson-steps/04-dataflow/components/06-state-lifting';
import { GreetQuoteFunc07, GreetQuoteClass07 } from '../lesson-steps/04-dataflow/components/07-events-change-state';

//Using simple components
export function App04_01() {
  return (
    <>
      <GreetingsFunc01/>
      <QuoteListFunc02/>
      <GreetingsClass01/>
      <QuoteListClass02/>
    </>
    );}

//Using the higher level components
export function App04_02() {
  return (
    <>
    <GreetQuoteFunc03/>
    <GreetQuoteClass03/>
    </>
    );}

//Using the higher level components with properties
export function App04_03() {
  return (
  <>
  <GreetQuoteFunc04/>
  <GreetQuoteClass04/>
  </>
    );}


//Using the higher level components with EVENT lifting
//Event lifting is about bubbling events upwards in the component hierachy by the usage of
//eventhandlers and properties.
//Child component after handling the events calls a parents eventhandler, if any, 
//that is passed to the child as a property
export function App04_04() {
  return (
    <>
    <GreetQuoteFunc05/>
    <GreetQuoteClass05/>
    </>
    );}

//Using the higher level components with STATE lifting
//STATE lifting is about keeping the states as high in the component hierachy as possible by the usage of
//properties. States are kept and updated in a parent and passed to the child as properties.
//When a state is updated all depending children are updated by React.
export function App04_05() {
  return (
    <>
    <GreetQuoteFunc06/>
    <GreetQuoteClass06/>
    </>
    );}

//Dataflow. Events upwards will change the states which will update the children through props
export function App04_06() {
  return (
    <>
    <GreetQuoteFunc07/>
    <GreetQuoteClass07/>
    </>
    );}