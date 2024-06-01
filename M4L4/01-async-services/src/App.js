import logo from './logo.svg';
import './App.css';
import { WebApiInfoAsyncF01, WebApiInfoAsyncC01} from './components/01-wapi-info-async';
import { WebApiListAsyncF02, WebApiListAsyncC02} from './components/02-wapi-list-async';

//https://legacy.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects
//You will notice React in Dev mode mounts the components twice.
//This is by intention to allow you to ease debugging. E.g. you can catch unmounting problems

function App() {
  return (
  <>
    <WebApiListAsyncF02/>
    <WebApiListAsyncC02/> 
  </>
  );
}

/*
    <WebApiInfoAsyncF01/>
    <WebApiInfoAsyncC01/> 

    <WebApiListAsyncF02/>
    <WebApiListAsyncC02/> 
*/


export default App;
