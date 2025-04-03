import React from 'react'

export function Greetings(props) {
  
    const loggin = (e) => {

        console.log(props);
        console.log(e.target);
    }

    return (
        <div onClick={loggin}>Hello {props?.name}. I am {props?.age} years old. I live in {props?.city}</div>
    )
}


