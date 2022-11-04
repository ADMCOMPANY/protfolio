import {Routes,Route} from "react-router-dom";
import About from "./Routes/About/About";
import Contact from "./Routes/Contact/Contact";
import Home from "./Routes/Home/Home";



function App() {
  return (
  <>

  <Routes>
  <Route  element={<Home/>} path = "/"/>
  <Route  element={<About/>} path = "/About"/>
  <Route  element={ <Contact/>} path = "/Contact"/>
  </Routes>
 
  
  
  </>
  );
}

export default App;
