import React, {useState} from 'react'
import { seedGenerator } from '../../../services/seido-helpers';


export function Latin(props) {
  
  const _seeder = new seedGenerator();

  const onClickLatin = (e) => {

    props.setSentences(_seeder.latinSentences(props.nrItems));
    console.log("ul clicked");

    //"Hello from Latin"
    e.message = props.sentences[0];
    if(props.onClickApp)
      props.onClickApp(e)
  }

  return (
    <div>
        <ul onClick={onClickLatin}>
            {props.sentences?.map(sentence => (<li>{sentence}</li>))}
        </ul>
    </div>
  )
}