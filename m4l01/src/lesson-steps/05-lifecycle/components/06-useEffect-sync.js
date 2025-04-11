import React, { Component, useState, useEffect, setState } from "react";

export function TimeTickerFunc06() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(
    //equvalent to componentDidMount
    () => {
    console.log('componentDidMount');
    
    const timer = setInterval(() => {

      //every 1 second will setCurrentTime be invoked, updating the component state
      setCurrentTime(new Date());
    }, 1000);


   //equvalent to componentWillUnmount
   return () => {
    console.log('componentWillUnmount');

    clearInterval(timer);}

}, [setCurrentTime]);

/*
  No dependency array: The effect runs after every render. useEffect(() => { // Runs on every render });
  Empty dependency array: The effect runs only once after the initial render. useEffect(() => { // Runs only on the first render }, []);
  Specific dependencies: The effect runs when any of the specified dependencies change. useEffect(() => { // Runs on the first render and whenever 'prop' or 'state' changes }, [prop, state]);
*/

  return (
    <div>
      <h1>Current Time</h1>
      <p>{currentTime.toLocaleTimeString()}</p>
      <ul>
        <li>Hello1</li>
        <li>Hello2</li>
      </ul>
    </div>
  );
}


export class TimeTickerClass06 extends Component {
  constructor(props) {
    super(props);          //Needs to be the 1st call

    //states, in class component, initialized, here with an empty object
    this.state = {currentTime: new Date()}
  }

  
  componentDidMount() {
    console.log('componentDidMount');

    //equvalent to componentDidMount
    this.timer = setInterval(() => {

      //every 1 second will setCurrentTime be invoked, updating the component state
      this.setState({currentTime: new Date()});
    }, 1000);
  }

  componentWillUnmount() { 
    console.log('componentWillUnmount');

    clearInterval(this.timer);
  }

  render() {
    return (
    <div>
      <h1>Current Time</h1>
      <p>{this.state.currentTime.toLocaleTimeString()}</p>
    </div>
    )
  }
}

//Showing that I need to bind this, if I use a class method, just like for events!
export class TimeTickerClass06a extends Component {
  constructor(props) {
    super(props);          //Needs to be the 1st call

    //states, in class component, initialized, here with an empty object
    this.state = {currentTime: new Date()}

    //Just like for an Eventhandler, need to rebind this in a class component.
    //Try without doing below line
    this.updateTimer = this.updateTimer.bind(this);
  }

  updateTimer() {

    //every 1 second will setCurrentTime be invoked, updating the component state
    this.setState({currentTime: new Date()});
  }
  
  componentDidMount() {
    console.log('componentDidMount');

    //equvalent to componentDidMount
    this.timer = setInterval(this.updateTimer, 1000);
  }

  componentWillUnmount() { 
    console.log('componentWillUnmount');

    clearInterval(this.timer);
  }

  render() {
    return (
    <div>
      <h1>Current Time</h1>
      <p>{this.state.currentTime.toLocaleTimeString()}</p>
    </div>
    )
  }
}
