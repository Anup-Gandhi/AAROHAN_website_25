import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clarity from '@microsoft/clarity';
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sponsors from "./components/Sponsors";
import ContactUs from "./components/ContactUs.jsx";
import Dastak from "./components/competitons/Dastak.jsx";
import Insync from "./components/competitons/Insync.jsx";
import Humming from "./components/competitons/Humming.jsx";
import Innerflame from "./components/competitons/Innerflame.jsx";
import GlamourNova from "./components/competitons/GlamourNova.jsx";
import ArtMaestro from "./components/competitons/ArtMaestro.jsx";
import Platform from "./components/competitons/Platform.jsx";
import Euphony from "./components/competitons/Euphony.jsx";
import HeadBang from "./components/competitons/HeadBang.jsx";
import Pronite from "./components/Events/Pronite.jsx";
import Theatre from "./components/Events/Theatre.jsx";
import Comedy from "./components/Events/Comedy.jsx";
import Youtuber from "./components/Events/Youtuber.jsx";
import BGMI from "./components/competitons/BGMI.jsx";
import Valorant from "./components/competitons/Valorant.jsx";
import loaderGif from "./assets/Loader.gif"; // Add your loader.gif here

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <img src={loaderGif} alt="Loading..." className="w-[25vw]" />
    </div>
  );
}

function Competitions() {
  return (
    <div className="relative h-screen overflow-hidden">
      <iframe
        src={`${process.env.PUBLIC_URL}/competitions.html`}
        title="Competitions"
        className="absolute top-0 left-0 w-full h-full border-none z-0"
      />
      <div className="relative z-10">
        <Routes>
          <Route path="insync" element={<Insync />} />
          <Route path="dastak" element={<Dastak />} />
          <Route path="Humming" element={<Humming />} />
          <Route path="Innerflame" element={<Innerflame />} />
          <Route path="GlamourNova" element={<GlamourNova />} />
          <Route path="ArtMaestro" element={<ArtMaestro />} />
          <Route path="Platform" element={<Platform />} />
          <Route path="Euphony" element={<Euphony />} />
          <Route path="HeadBang" element={<HeadBang />} />
          <Route path="BGMI" element={<BGMI />} />
          <Route path="Valorant" element={<Valorant />} />
        </Routes>
      </div>
    </div>
  );
}

function Events() {
  return (
    <div className="relative h-screen overflow-hidden">
      <iframe
        src={`${process.env.PUBLIC_URL}/events.html`}
        title="events"
        className="absolute top-0 left-0 w-full h-full border-none z-0"
      />
      <div className="relative z-10">
        <Routes>
          <Route path="Pronite" element={<Pronite />} />
          <Route path="Theatre" element={<Theatre />} />
          <Route path="Youtuber" element={<Youtuber />} />
          <Route path="Comedy" element={<Comedy />} />
        </Routes>
      </div>
    </div>
  );
}

function Photos() {
  return (
    <div className="h-screen overflow-hidden">
      <iframe
        src={`${process.env.PUBLIC_URL}/photos.html`}
        title="photos"
        className="w-full h-full border-none"
      />
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Clarity.init("pufm7nqqk7")
  }, [])
  useEffect(() => {
    // Simulate a delay for loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competitions/*" element={<Competitions />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/events/*" element={<Events />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
