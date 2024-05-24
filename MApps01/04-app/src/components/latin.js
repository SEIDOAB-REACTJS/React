import React, {useState} from 'react'
import { seedGenerator } from '../services/seido-helpers';


export function Latin(props) {
  
  const _seeder = new seedGenerator();
  const [sentences, setSentences] = useState (_seeder.latinSentences(props.nrItems)); //Example if you need another state property
  
  const onClickLatin = (e) => {

    setSentences(_seeder.latinSentences(props.nrItems));
    console.log("ul clicked");

    //"Hello from Latin"
    e.message = sentences[0];
    props.onClickApp(e)
  }

  return (
    <div>
        <ul onClick={onClickLatin}>
            {sentences.map(sentence => (<li>{sentence}</li>))}
        </ul>
    </div>
  )
}