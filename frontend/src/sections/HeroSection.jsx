import React from "react";
import { FadeIn } from "../components/FadeIn";
import { Magnet } from "../components/Magnet";
import { ContactButton } from "../components/ContactButton";

const PORTRAIT_URL =
  "https://customer-assets.emergentagent.com/job_69e1d8f0-66f6-477f-be5e-0eb40c478d51/artifacts/exlb0637_ChatGPT%20Image%2012_05_2026%2C%2001_04_26.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Price", href: "#services" },
  { label: "Projects", href: "#projects" },
];

export const HeroSection = ({ onContactClick }) => {
  return (
    <section
      className="relative min-h-screen w-full flex flex-col"
      style={{ overflowX: "clip" }}
      data-testid="hero-section"
    >
      {/* Navbar */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="relative z-30 w-full px-6 md:px-10 pt-6 md:pt-8"
        data-testid="hero-navbar"
      >
        <ul className="flex justify-center items-center gap-8 sm:gap-12 md:gap-16 list-none">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
                className="font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
                style={{ color: "#D7E2EA" }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={onContactClick}
              data-testid="nav-link-contact"
              className="font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70 bg-transparent border-none cursor-pointer"
              style={{ color: "#D7E2EA", fontFamily: "Kanit, sans-serif" }}
            >
              Contact
            </button>
          </li>
        </ul>
      </FadeIn>

      {/* Heading + Portrait container */}
      <div className="relative flex-1 w-full">
        {/* Portrait centered absolutely - in front of heading */}
        <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center">
          <FadeIn
            delay={0.6}
            y={30}
            data-testid="hero-portrait-wrap"
          >
            <Magnet
              padding={150}
              strength={3}
              activeTransition="transform 0.3s ease-out"
              inactiveTransition="transform 0.6s ease-in-out"
            >
              <img
                src={PORTRAIT_URL}
                alt="Vini portrait"
                data-testid="hero-portrait"
                className="w-[320px] sm:w-[400px] md:w-[480px] lg:w-[560px] h-auto select-none pointer-events-auto"
                style={{ willChange: "transform" }}
                draggable={false}
              />
            </Magnet>
          </FadeIn>
        </div>

        {/* Hero heading */}
        <FadeIn
          as="h1"
          delay={0.15}
          y={40}
          data-testid="hero-heading"
          className="hero-heading relative z-20 w-full text-center font-black uppercase tracking-tight leading-none mt-12 sm:mt-16 px-2"
          style={{
            fontSize: "clamp(2rem, 10vw, 12rem)",
            whiteSpace: "normal",
          }}
        >
          Hi, my name is Vini, nice to meet you.
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="relative z-20 flex justify-between items-end pb-10 sm:pb-16 pr-8 sm:pr-12 pl-6 md:pl-10 gap-4">
        <FadeIn delay={0.35} y={20}>
          <p
            data-testid="hero-tagline"
            className="font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{
              color: "#D7E2EA",
              fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)",
            }}
          >
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton
            size="large"
            onClick={onContactClick}
            testId="hero-contact-button"
          />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
