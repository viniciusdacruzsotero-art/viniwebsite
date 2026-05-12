import React from "react";
import { FadeIn } from "../components/FadeIn";

const services = [
  {
    n: "01",
    name: "3D Modeling",
    desc: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.",
  },
  {
    n: "02",
    name: "Rendering",
    desc: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.",
  },
  {
    n: "03",
    name: "Motion Design",
    desc: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.",
  },
  {
    n: "04",
    name: "Branding",
    desc: "Crafting cohesive visual identities — from logos to full brand systems — that communicate a clear and memorable presence.",
  },
  {
    n: "05",
    name: "Web Design",
    desc: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.",
  },
];

const Card = ({ n, name, desc, idx, fullWidth }) => (
  <FadeIn
    delay={idx * 0.1}
    y={30}
    className={`glass-card ${fullWidth ? "col-span-2 mx-auto max-w-4xl w-full" : ""}`}
    data-testid={`service-card-${n}`}
  >
    <div className="text-left flex flex-col">
      <div
        className="font-black text-white"
        style={{
          fontSize: "clamp(2rem, 5vw, 64px)",
          marginBottom: "0.25rem",
          lineHeight: 1,
        }}
        data-testid={`service-number-${n}`}
      >
        {n}
      </div>
      <div
        className="font-medium uppercase text-white"
        style={{
          fontSize: "clamp(0.9rem, 1.8vw, 1.4rem)",
          marginBottom: "0.75rem",
        }}
      >
        {name}
      </div>
      <div
        className="font-light leading-relaxed text-white opacity-60"
        style={{ fontSize: "clamp(0.75rem, 1.2vw, 1rem)" }}
      >
        {desc}
      </div>
    </div>
  </FadeIn>
);

export const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative w-full px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{
        background: "#0C0C0C",
        borderTopLeftRadius: "clamp(40px, 5vw, 60px)",
        borderTopRightRadius: "clamp(40px, 5vw, 60px)",
      }}
      data-testid="services-section"
    >
      <FadeIn
        as="h2"
        y={40}
        data-testid="services-heading"
        className="hero-heading font-black uppercase text-center w-full mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Services
      </FadeIn>

      <div className="grid grid-cols-2 gap-4 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <Card
            key={s.n}
            {...s}
            idx={i}
            fullWidth={i === services.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
