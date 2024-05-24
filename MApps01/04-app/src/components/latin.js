import React, {useState} from 'react'
import { seedGenerator } from '../services/seido-helpers';


export function Latin(props) {
  
  const _seeder = new seedGenerator();
  const [sentences, setSentences] = useState (_seeder.latinSentences(props.nrItems)); //Example if you need another state property
  
  const onClick = (e) => {

    setSentences(_seeder.latinSentences(props.nrItems));
    console.log("ul clicked");
  }
  return (
    <div>
        <ul onClick={onClick}>
            {sentences.map(sentence => (<li>{sentence}</li>))}
        </ul>
    </div>
  )
}