import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNavbar from "./components/TopNavbar";
import Home from "./pages/Home/Home";
import Service from "./pages/Service/Service";
import Destination from "./pages/Destination/Destination";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <Router>
      <TopNavbar />
          <div className="App">
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/service" element={ <Service /> } />
            <Route path="/destination" element={ <Destination /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/contact" element={ <Contact rows={4} /> } />
          </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
