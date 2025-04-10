import React, { useState, useEffect } from "react";

export function UseEffect04() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {

    //equvalent to componentDidMount
    console.log('TimeDisplay componentDidMount');


   return () => {
    //equvalent to componentWillUnmount
    console.log('TimeDisplay componentDidUnmount');
   }
}, []);

  return (
    <div>
      <h1>Current Time</h1>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
}