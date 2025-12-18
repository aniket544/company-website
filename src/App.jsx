import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Project from './pages/Project/Project.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Wwd from './pages/WWD/Whatwd.jsx';
import BusinessDevelopment from './pages/BusinessDev/BusinessDevelopment.jsx';
import Tp from './pages/TP/Tp.jsx';
import Gr from './pages/GR/Gr.jsx';
import Gc from './pages/GC/Gc.jsx';
import Va from './pages/VA/Va.jsx';
import Services from './components/Services/Services.jsx';
import Payment from './pages/Payment/Payment.jsx';
import PricingSection from './components/PricingSection/PricingSection.jsx';
import GeM from './components/Gem/GeM.jsx';
import Plans from './components/Plans/Plans.jsx';

import Bid from './pages/Bid/Bid.jsx'; 
import Login from './pages/Login/Login.jsx';
import Signup from './pages/SignUp/Signup.jsx';
import Profile from './components/Profile/Profile.jsx';


function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/wwd" element={<Wwd />} />
          
          <Route path="/gr" element={<Gr />} />
          <Route path="/gc" element={<Gc />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/tp" element={<Tp />} />
          <Route path="/va" element={<Va />} />
          <Route path="/bdev" element={<BusinessDevelopment />} />
          <Route path="/pricing" element={<Plans />} />
          <Route path="/bid" element={<Bid />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile/>}/>
        
        </Routes>
      </Router>
    </>
  );
}

export default App;
