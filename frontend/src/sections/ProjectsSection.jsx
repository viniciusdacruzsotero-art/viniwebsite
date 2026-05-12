import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "../components/FadeIn";
import { LiveProjectButton } from "../components/ContactButton";

const projects = [
  {
    n: "01",
    name: "Nextlevel Studio",
    cat: "Client",
    img1:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    img2:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
    imgTall:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
  },
  {
    n: "02",
    name: "Aura Brand Identity",
    cat: "Personal",
    img1:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    img2:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
    imgTall:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
  },
  {
    n: "03",
    name: "Solaris Digital",
    cat: "Client",
    img1:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
    img2:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
    imgTall:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
  },
];

const ProjectCard = ({ project, index, total, progress }) => {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const y = useTransform(progress, [index / total, (index + 1) / total], [80, 0]);

  return (
    <div
      className="sticky"
      style={{
        top: `calc(96px + ${index * 20}px)`,
        paddingTop: 0,
      }}
    >
      <motion.div
        data-testid={`project-card-${project.n}`}
        style={{
          scale,
          y,
          background: "#0C0C0C",
          border: "1px solid rgba(215, 226, 234, 0.4)",
          borderRadius: "clamp(30px, 4vw, 40px)",
          padding: "clamp(16px, 2vw, 24px)",
        }}
        className="w-full mx-auto"
      >
        {/* Top row */}
        <div className="flex justify-between items-start gap-4">
          <div className="flex flex-col">
            <div
              className="font-black text-white"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 80px)",
                lineHeight: 1,
              }}
            >
              {project.n}
            </div>
            <div
              className="uppercase opacity-60"
              style={{
                color: "#D7E2EA",
                letterSpacing: "0.1em",
                marginTop: 6,
                fontSize: "clamp(0.7rem, 0.9vw, 0.85rem)",
              }}
            >
              {project.cat}
            </div>
            <div
              className="font-medium uppercase text-white"
              style={{
                fontSize: "clamp(1rem, 2vw, 1.4rem)",
                marginTop: 4,
              }}
            >
              {project.name}
            </div>
          </div>
          <LiveProjectButton testId={`live-project-${project.n}`} />
        </div>

        {/* Bottom row */}
        <div className="mt-4 flex gap-3">
          <div className="flex flex-col gap-3" style={{ width: "40%" }}>
            <img
              src={project.img1}
              alt={`${project.name} 1`}
              loading="lazy"
              className="w-full object-cover"
              style={{
                height: "clamp(100px, 12vw, 180px)",
                borderRadius: "clamp(20px, 2.5vw, 30px)",
              }}
            />
            <img
              src={project.img2}
              alt={`${project.name} 2`}
              loading="lazy"
              className="w-full object-cover"
              style={{
                height: "clamp(120px, 16vw, 240px)",
                borderRadius: "clamp(20px, 2.5vw, 30px)",
              }}
            />
          </div>
          <div style={{ width: "60%" }}>
            <img
              src={project.imgTall}
              alt={`${project.name} tall`}
              loading="lazy"
              className="w-full h-full object-cover"
              style={{ borderRadius: "clamp(20px, 2.5vw, 30px)" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative w-full -mt-10 sm:-mt-12 md:-mt-14 z-10"
      style={{
        background: "#0C0C0C",
        borderTopLeftRadius: "clamp(40px, 5vw, 60px)",
        borderTopRightRadius: "clamp(40px, 5vw, 60px)",
      }}
      data-testid="projects-section"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8 md:px-10 pt-20">
        <FadeIn
          as="h2"
          y={40}
          data-testid="projects-heading"
          className="hero-heading font-black uppercase text-center w-full mb-16"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Project
        </FadeIn>

        <div className="relative">
          {projects.map((p, i) => (
            <div key={p.n} style={{ height: "70vh" }}>
              <ProjectCard
                project={p}
                index={i}
                total={projects.length}
                progress={scrollYProgress}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
