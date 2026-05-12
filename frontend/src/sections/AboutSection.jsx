import React from "react";
import { FadeIn } from "../components/FadeIn";
import { AnimatedText } from "../components/AnimatedText";
import { ContactButton } from "../components/ContactButton";

const decoTopLeft =
  "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png";
const decoBottomLeft =
  "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png";
const decoTopRight =
  "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png";
const decoBottomRight =
  "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png";

export const AboutSection = ({ onContactClick }) => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
      data-testid="about-section"
    >
      {/* Decorative 3D icons */}
      <FadeIn
        delay={0.1}
        x={-80}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none"
      >
        <img
          src={decoTopLeft}
          alt=""
          data-testid="about-deco-top-left"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto"
        />
      </FadeIn>
      <FadeIn
        delay={0.25}
        x={-80}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none"
      >
        <img
          src={decoBottomLeft}
          alt=""
          data-testid="about-deco-bottom-left"
          className="w-[100px] sm:w-[140px] md:w-[180px] h-auto"
        />
      </FadeIn>
      <FadeIn
        delay={0.15}
        x={80}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none"
      >
        <img
          src={decoTopRight}
          alt=""
          data-testid="about-deco-top-right"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto"
        />
      </FadeIn>
      <FadeIn
        delay={0.3}
        x={80}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none"
      >
        <img
          src={decoBottomRight}
          alt=""
          data-testid="about-deco-bottom-right"
          className="w-[130px] sm:w-[170px] md:w-[220px] h-auto"
        />
      </FadeIn>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-10 sm:gap-14 md:gap-16 max-w-3xl">
        <FadeIn
          as="h2"
          delay={0}
          y={40}
          data-testid="about-heading"
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          About me
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text="With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"
            className="text-center font-medium leading-relaxed max-w-[560px]"
            style={{
              color: "#D7E2EA",
              fontSize: "clamp(1rem, 2vw, 1.35rem)",
            }}
          />
          <ContactButton onClick={onContactClick} testId="about-contact-button" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
