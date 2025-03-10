import { BrowserRouter} from 'react-router-dom';
import {AppRouter} from './routes/approuter';

import './App.css';
import {Header} from './components/header'
import {Footer} from './components/footer'
import {Home} from './pages/home'
import {About} from './pages/about'

function App() {
  return (
  <>
  <BrowserRouter>
    <Header/>
    <AppRouter/>  
    <Footer/>
  </BrowserRouter>
  </>
  );
}

export default App;

/* Exercises

1. Study the component ReadWebApiFunc06 in M4L1, 05-lifecycle, 06-using-lifecycle-async.js
   - implement in component Home, pages, home.js communication with the WebApi and fill in the details of 
    number of groups, number of artists, number of albums
    
2. Add a page to the application that uses the component, AnimalInModal11a, in M4L3, 11a-form-animal-in-modal.js
   - the page should create a list of animals, by allowing the user to add one animal at the time from a modal form.

*/
