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

1. Use parameter passing to page component Albums from the Menu to have the menuitems
   Albums with love -> preset the search filter to love
   Rockalbums -> preset the search filter to rock

   A click on the search button shall then list the corresponding albums

2. Modify page component Albums by using useEffect so the page is also initially showing 
   albums with love respective rockalbums. I.e. without needing to press the search button.
*/
