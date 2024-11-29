import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sponsors from "./components/Sponsors";
import Photos from "./components/Photos";
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

function Competitions() {
  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* Iframe in background */}
      <iframe
        src={`${process.env.PUBLIC_URL}/competition.html`}
        title="Competitions"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
          zIndex: 0,  // Make sure the iframe stays in the background
        }}
      />
      
      {/* Content of sub-pages rendered above the iframe */}
      <div style={{ position: "relative", zIndex: 1 }}>
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
        </Routes>
      </div>
    </div>
  );
}

function Events() {
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <iframe
        src={`${process.env.PUBLIC_URL}/events.html`}
        title="events"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competitions/*" element={<Competitions />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/events" element={<Events />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
