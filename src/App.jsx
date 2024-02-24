import Creators from "./Pages/Creators";
import Ecosystem from "./Pages/Ecosystem";
import Fans from "./Pages/Fans";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";

function App() {
  return (
    <>
         <Router> {/* Wrap your entire application with the Router component */}
      <Routes>
        {/* English Routes */}
      
        <Route path="/" element={<Home />} />
        <Route path="/ecosystem" element={<Ecosystem/>} />
        <Route path="/creator" element={<Creators/>} />
        <Route path="/fans" element={<Fans/>} />


     
        
  
     
      </Routes>
    </Router>
    </>
  );
}

export default App;
