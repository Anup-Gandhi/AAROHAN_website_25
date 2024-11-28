import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sponsors from "./components/Sponsors";
import Photos from "./components/Photos";
import ContactUs from "./components/ContactUs.jsx";
import Dastak from "./components/competitons/Dastak.jsx";
import Insync from "./components/competitons/Insync.jsx";

function Competitions() {
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <iframe
        src={`${process.env.PUBLIC_URL}/competition.html`}
        title="Competitions"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
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
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Competitions/" >
            <Route path="Insync" element={<Insync />} />
            <Route path="Dastak" element={<Dastak />} />
          </Route>
          <Route path="/Sponsors" element={<Sponsors />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Photos" element={<Photos />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
