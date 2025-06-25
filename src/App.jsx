import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './screens/Inc/Navbar';
import Footer from './screens/Inc/Footer';
import Banner from './screens/Banner';
import Modelwearing from './screens/ModelWearing';
import Logos from './screens/Logos';
import Categories from './screens/Categories';
import Products from './screens/Products';
import Ads from './screens/Ads';
import Ourfeatured from './screens/Ourfeatured';



function Home() {
  return (
    <>
      <Banner />
      <Modelwearing />
      <Logos />
      <Categories />
      <Products />
      <Ads />
      <Ourfeatured />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
