import {  Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import FAQ from './FAQ';
function AllComponents () {
    return ( 
        <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<FAQ />} />
        </Route>
      </Routes>
     );
}

export default AllComponents ;