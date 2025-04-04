import '../lesson-steps/09-app-react-router/css/grid.css';

import { BrowserRouter} from 'react-router';

import Footer from '../lesson-steps/10-app-react-router-param/components/footer';
import Header from '../lesson-steps/10-app-react-router-param/components/header';
import {AppRouter} from '../lesson-steps/10-app-react-router-param/router/approuter';


function App10() {
  return (

    //lesson-step 10
    <BrowserRouter  future={{v7_relativeSplatPath: true, v7_startTransition: true}}>
      <Header/>
      <AppRouter/>   
      <Footer/>
    </BrowserRouter>
    );

}

export default App10;
