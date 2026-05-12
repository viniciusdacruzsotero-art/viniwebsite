import React, { useState } from "react";
import "@/App.css";
import { HeroSection } from "./sections/HeroSection";
import { MarqueeSection } from "./sections/MarqueeSection";
import { AboutSection } from "./sections/AboutSection";
import { ServicesSection } from "./sections/ServicesSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ContactModal } from "./components/ContactModal";

function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  return (
    <div
      className="App"
      style={{ background: "#0C0C0C", overflowX: "clip", minHeight: "100vh" }}
      data-testid="app-root"
    >
      <HeroSection onContactClick={openContact} />
      <MarqueeSection />
      <AboutSection onContactClick={openContact} />
      <ServicesSection />
      <ProjectsSection />
      <ContactModal open={contactOpen} onClose={closeContact} />

      <footer
        style={{
          padding: "3rem 1.5rem 6rem",
          textAlign: "center",
          color: "#D7E2EA",
          opacity: 0.4,
          fontSize: 12,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          background: "#0C0C0C",
        }}
        data-testid="footer"
      >
        © {new Date().getFullYear()} Vini — 3D Creator
      </footer>
    </div>
  );
}

export default App;
