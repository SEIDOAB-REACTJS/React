import React from 'react'

export function Header(props) {
  return (
    <div>
        <h1>Cool images.</h1>
        <p>Clicked images: {props.message}</p>
    </div>
  )
}
