import Ecosystem from "./Pages/Ecosystem";
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
     
        
  
     
      </Routes>
    </Router>
    </>
  );
}

export default App;
