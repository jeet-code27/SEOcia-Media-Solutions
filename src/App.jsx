import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import WebDevelopment from "./components/WebDevelopment";
import Seo from "./components/Seo";
import GoogleAdsServices from "./components/GoogleAds";
import ContentWritingServices from "./components/ContentWritingServices";
import SocialMediaServices from "./components/SocialMediaServices";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import FloatingContact from "./components/FloatingContact";
import CareerPage from "./components/CareerPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/seo" element={<Seo />} />
        <Route path="/google-ads" element={<GoogleAdsServices/>} />
        <Route path="/content" element={<ContentWritingServices/>} />
        <Route path="/social-media-marketing" element={<SocialMediaServices/>} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/career" element={<CareerPage />} />
      </Routes>
      <FloatingContact />
      <Footer/>
    </Router>
  );
}

export default App;
