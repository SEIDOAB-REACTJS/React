import React from 'react'
import { seedGenerator } from '../../../services/seido-helpers';

export function Greetings(props) {

  const books = ['Maddicken', 'Emil', 'Pippi'];

  const _seeder = new seedGenerator();
  const _quotes = _seeder.quotes(5);

  let li_items;
  if (props.like === 'books')
  {
    li_items = books.map(book => <li>{book}</li>);
  } 
  else if (props.like === "quotes")
  {
    li_items = _quotes.map(quote => <li>{quote.quote}, {quote.author}</li>);
  }


  console.log (props);

  return (
    <div>
      <h1>Hello from {props.name}</h1>
      <p>I like {props.like} and good food!</p>
      <p>My {li_items.length} favorite {props.like} are:</p>

      <ul>
        {li_items}
      </ul>
    </div>
  )
}
