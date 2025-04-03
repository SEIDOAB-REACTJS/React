import React from 'react'
import "../../../css/flexbox_5.css";

export function Colorboxes(props) {

  let p = props.colors ||  ["Yellow"];

  return (
	<div className="FlexWrap">
        {p.map(color => <div className={`FlexItem ${color}`}>{color} box</div>)}
	</div>
  )
}
