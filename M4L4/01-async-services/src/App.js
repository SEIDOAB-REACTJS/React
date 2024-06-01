import logo from './logo.svg';
import './App.css';
import { WebApiInfoAsyncF01, WebApiInfoAsyncC01} from './components/01-wapi-info-async';
import { WebApiListAsyncF02, WebApiListAsyncC02} from './components/02-wapi-list-async';
import { WebApiListPagingAsyncF03, WebApiListPagingAsyncC03} from './components/03-wapi-list-paging-async';
import { WebApiListSearchAsyncF04, WebApiListSearchAsyncC04} from './components/04-wapi-list-search-async';

//https://legacy.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects
//You will notice React in Dev mode mounts the components twice.
//This is by intention to allow you to ease debugging. E.g. you can catch unmounting problems

function App() {
  return (
  <>
    <WebApiListSearchAsyncF04/>
  </>
  );
}

/*
    <WebApiInfoAsyncF01/>
    <WebApiInfoAsyncC01/> 

    <WebApiListAsyncF02/>
    <WebApiListAsyncC02/> 

    <WebApiListPagingAsyncF03/>
    <WebApiListPagingAsyncC03/> 

    <WebApiListSearchAsyncF04/>
    <WebApiListSearchAsyncC04/> 

*/


export default App;
