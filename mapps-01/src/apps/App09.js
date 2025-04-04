import '../lesson-steps/09-app-react-router/css/grid.css';

import {BrowserRouter} from 'react-router';

import Footer from '../lesson-steps/09-app-react-router/components/footer';
import Header from '../lesson-steps/09-app-react-router/components/header';
import {AppRouter} from '../lesson-steps/09-app-react-router/router/approuter';


function App09() {
  return (

    //lesson-step 09
    <BrowserRouter  future={{v7_relativeSplatPath: true, v7_startTransition: true}}>
      <Header/>
      <AppRouter/>   
      <Footer/>
    </BrowserRouter>
  );

}

export default App09;
