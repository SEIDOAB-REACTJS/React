import './App.css';
import { BrowserRouter} from 'react-router-dom';

import Footer from './components/footer';
import Header from './components/header';
import {AppRouter} from './router/approuter';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <AppRouter/>   
      <Footer/>
    </BrowserRouter>
    );
}

export default App;

/* Exercise
1. Add component Musicalbums from 08-app-bs-async as a page component
2. Setup NavMenu and AppRouter so that a navigation alternative Music navigates to page Musicalbums
3. Very that it works
*/