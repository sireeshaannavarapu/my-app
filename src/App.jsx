import logo from './logo.svg';
import './App.css';


import axios from 'axios';
import Project from './Project';
// import 'bootstrap/dist/css/bootstrap.css';
import Accordion from './Accordion';
 
 import Reviews from './Testimonialreview';
 import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Shopping from './Shopping';


// import shop from './Shopping'




function App() {
  
  return (
    <div>
      <div className='mybox'>
          {/* <First></First> */}
          {/* <Second></Second> */}
          <Project></Project>
      </div>
    
      {/* <Sorting></Sorting> */}
     <Accordion></Accordion>
     <Reviews></Reviews>
     <Shopping></Shopping> 
      
    </div>
  );
}

export default App;

