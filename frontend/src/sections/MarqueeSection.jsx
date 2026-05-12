import React from "react";

const ALL_GIFS = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

const ROW_1 = ALL_GIFS.slice(0, 11);
const ROW_2 = ALL_GIFS.slice(11);

const Tile = ({ src, idx }) => (
  <img
    src={src}
    alt=""
    loading="lazy"
    data-testid={`marquee-tile-${idx}`}
    style={{
      width: 420,
      height: 270,
      borderRadius: 16,
      objectFit: "cover",
      flexShrink: 0,
    }}
  />
);

export const MarqueeSection = () => {
  const row1 = [...ROW_1, ...ROW_1, ...ROW_1];
  const row2 = [...ROW_2, ...ROW_2, ...ROW_2];

  return (
    <section
      className="relative w-full pt-24 sm:pt-32 md:pt-40 pb-10"
      style={{ background: "#0C0C0C", overflow: "hidden" }}
      data-testid="marquee-section"
    >
      <div className="flex flex-col gap-3">
        <div style={{ overflow: "hidden", width: "100%" }}>
          <div
            className="marquee-track-right flex gap-3"
            style={{ width: "max-content" }}
          >
            {row1.map((src, i) => (
              <Tile key={`r1-${i}`} src={src} idx={`r1-${i}`} />
            ))}
          </div>
        </div>
        <div style={{ overflow: "hidden", width: "100%" }}>
          <div
            className="marquee-track-left flex gap-3"
            style={{ width: "max-content" }}
          >
            {row2.map((src, i) => (
              <Tile key={`r2-${i}`} src={src} idx={`r2-${i}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
