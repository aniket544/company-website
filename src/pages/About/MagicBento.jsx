import { useRef, useEffect, useCallback, useState } from "react";
import { gsap } from "gsap";
import "./MagicBento.css";
import graph from '../../assets/grow12.png';

// CYAN THEME - rgb(107, 211, 211)
const DEFAULT_GLOW_COLOR = "107, 211, 211"; // rgba(107, 211, 211, x)
const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const MOBILE_BREAKPOINT = 768;

const cardData = [
  { color: "#060010", title: "Analytics", description: "Track user behavior", label: "GeM Registration" },
  { color: "#060010", title: "Brand Approval", description: "Centralized data view", label: "GeM Vendor Assessment" },
  { color: "#060010", title: "Awarded", description: "1700+", label: "Tender Participation" },
  { color: "#060010", title: "Product & Service", description: "For Bid & Direct Orders", label: "GeM Catalog Management" },
  { color: "#060010", title: "Profile Completion", description: "100%", label: "GeM Account Management" },
  { color: "#060010", title: "Strategies & Patterns", description: "Empowering You to Bid Smarter", label: "Tender Insights & Analysis" },
];

const createParticleElement = (x, y, color = DEFAULT_GLOW_COLOR) => {
  const el = document.createElement("div");
  el.className = "particle";
  el.style.cssText = `
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 
      0 0 12px rgba(${color}, 0.9),
      0 0 24px rgba(${color}, 0.5);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
    filter: blur(0.5px);
  `;
  return el;
};

const calculateSpotlightValues = (radius) => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75,
});

const updateCardGlowProperties = (card, mouseX, mouseY, glow, radius) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty("--glow-x", `${relativeX}%`);
  card.style.setProperty("--glow-y", `${relativeY}%`);
  card.style.setProperty("--glow-intensity", glow.toString());
  card.style.setProperty("--glow-radius", `${radius}px`);
};

const ParticleCard = ({
  children,
  className = "",
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = false,
  enableMagnetism = false,
}) => {
  const cardRef = useRef(null);
  const particlesRef = useRef([]);
  const timeoutsRef = useRef([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef([]);
  const particlesInitialized = useRef(false);
  const magnetismAnimationRef = useRef(null);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;
    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(Math.random() * width, Math.random() * height, glowColor)
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();
    particlesRef.current.forEach(p => {
      gsap.to(p, { scale: 0, opacity: 0, duration: 0.3, ease: "back.in(1.7)", onComplete: () => p.remove() });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;
    if (!particlesInitialized.current) initializeParticles();

    memoizedParticles.current.forEach((particle, i) => {
      setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;
        const clone = particle.cloneNode(true);
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.8)" });
        gsap.to(clone, { x: (Math.random() - 0.5) * 120, y: (Math.random() - 0.5) * 120, rotation: Math.random() * 360, duration: 3 + Math.random() * 2, ease: "none", repeat: -1, yoyo: true });
        gsap.to(clone, { opacity: 0.4, duration: 2, ease: "power2.inOut", repeat: -1, yoyo: true });
      }, i * 90);
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;
    const el = cardRef.current;

    const enter = () => { isHoveredRef.current = true; animateParticles(); if (enableTilt) gsap.to(el, { rotateY: 6, rotateX: 6, duration: 0.4, ease: "power3.out", transformPerspective: 1000 }); };
    const leave = () => { isHoveredRef.current = false; clearAllParticles(); if (enableTilt) gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.4 }); if (enableMagnetism) gsap.to(el, { x: 0, y: 0, duration: 0.4 }); };
    const move = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      if (enableTilt) {
        gsap.to(el, { rotateY: (x - cx) / cx * 12, rotateX: (cy - y) / cy * 12, duration: 0.1, ease: "none", transformPerspective: 1000 });
      }
      if (enableMagnetism) {
        magnetismAnimationRef.current = gsap.to(el, { x: (x - cx) * 0.08, y: (y - cy) * 0.08, duration: 0.5, ease: "power2.out" });
      }
    };

    const click = (e) => {
      if (!clickEffect) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const maxDist = Math.max(Math.hypot(x, y), Math.hypot(x - rect.width, y), Math.hypot(x, y - rect.height), Math.hypot(x - rect.width, y - rect.height));

      const ripple = document.createElement("div");
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDist * 2}px;
        height: ${maxDist * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.6) 0%, rgba(${glowColor}, 0.3) 40%, transparent 70%);
        left: ${x - maxDist}px;
        top: ${y - maxDist}px;
        pointer-events: none;
        z-index: 1000;
      `;
      el.appendChild(ripple);
      gsap.fromTo(ripple, { scale: 0, opacity: 1 }, { scale: 1, opacity: 0, duration: 1, ease: "power2.out", onComplete: () => ripple.remove() });
    };

    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    el.addEventListener("mousemove", move);
    el.addEventListener("click", click);

    return () => {
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
      el.removeEventListener("mousemove", move);
      el.removeEventListener("click", click);
      clearAllParticles();
    };
  }, [animateParticles, clearAllParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor]);

  return (
    <div ref={cardRef} className={`${className} particle-container`} style={{ ...style, position: "relative", overflow: "hidden" }}>
      {children}
    </div>
  );
};

const GlobalSpotlight = ({
  gridRef,
  disableAnimations = false,
  enabled = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR,
}) => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    if (disableAnimations || !gridRef?.current || !enabled) return;

    const spotlight = document.createElement("div");
    spotlight.className = "global-spotlight";
    spotlight.style.cssText = `
      position: fixed;
      width: 900px;
      height: 900px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.22) 0%,
        rgba(${glowColor}, 0.12) 20%,
        rgba(${glowColor}, 0.06) 40%,
        rgba(${glowColor}, 0.02) 70%,
        transparent 85%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
      filter: blur(20px);
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMove = (e) => {
      const section = gridRef.current?.closest(".bento-section");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const inside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

      const cards = gridRef.current.querySelectorAll(".card");
      if (!inside) {
        gsap.to(spotlight, { opacity: 0, duration: 0.4 });
        cards.forEach(c => c.style.setProperty("--glow-intensity", "0"));
        return;
      }

      const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
      let minDist = Infinity;

      cards.forEach(card => {
        const r = card.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dist = Math.hypot(e.clientX - cx, e.clientY - cy) - Math.max(r.width, r.height) / 2;
        const effDist = Math.max(0, dist);
        minDist = Math.min(minDist, effDist);

        const intensity = effDist <= proximity ? 1 : effDist <= fadeDistance ? (fadeDistance - effDist) / (fadeDistance - proximity) : 0;
        updateCardGlowProperties(card, e.clientX, e.clientY, intensity, spotlightRadius);
      });

      gsap.to(spotlight, { left: e.clientX, top: e.clientY, duration: 0, ease: "none" });
      gsap.to(spotlight, { opacity: minDist < proximity ? 0.9 : minDist < fadeDistance ? (fadeDistance - minDist) / (fadeDistance - proximity) * 0.9 : 0, duration: 0.3 });
    };

    document.addEventListener("mousemove", handleMove);
    return () => {
      document.removeEventListener("mousemove", handleMove);
      spotlightRef.current?.remove();
    };
  }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

  return null;
};

const BentoCardGrid = ({ children, gridRef }) => (
  <div className="card-grid bento-section" ref={gridRef}>{children}</div>
);

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

const MagicBento = ({
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = true,
  clickEffect = true,
  enableMagnetism = true,
}) => {
  const gridRef = useRef(null);
  const isMobile = useMobileDetection();
  const noAnim = disableAnimations || isMobile;

  return (
    <>
      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={noAnim}
          enabled={enableSpotlight}
          spotlightRadius={spotlightRadius}
          glowColor={DEFAULT_GLOW_COLOR}
        />
      )}

      <BentoCardGrid gridRef={gridRef}>
        {cardData.map((card, i) => {
          const cls = `card ${textAutoHide ? "card--text-autohide" : ""} ${enableBorderGlow ? "card--border-glow" : ""}`;
          const style = {
            backgroundColor: card.color,
            "--glow-color": `rgb(${DEFAULT_GLOW_COLOR})`,
            "--glow-color-rgb": DEFAULT_GLOW_COLOR,
          };

          return enableStars ? (
            <ParticleCard
              key={i}
              className={cls}
              style={style}
              disableAnimations={noAnim}
              particleCount={particleCount}
              glowColor={DEFAULT_GLOW_COLOR}
              enableTilt={enableTilt}
              clickEffect={clickEffect}
              enableMagnetism={enableMagnetism}
            >
              <div className="card__header"><div className="card__label">{card.label}</div></div>
              <div className="card__content">
                {card.label === "GeM Registration" && <img className="card__image" src={graph} alt="Graph" />}
                {card.label === "GeM Vendor Assessment" && <h1 className="card__big-number">50+</h1>}
                {card.label === "Tender Participation" && <h1 className="card__big-number">10K+</h1>}
                {card.label === "GeM Catalog Management" && <h1 className="card__big-number">50K+</h1>}
                {card.label === "GeM Account Management" && <h1 className="card__big-number">99.9%</h1>}
                {card.label === "Tender Insights & Analysis" && <h1 className="card__big-number3">87% Happy Clients</h1>}
                <h2 className="card__title">{card.title}</h2>
                <p className="card__description">{card.description}</p>
              </div>
            </ParticleCard>
          ) : (
            <div key={i} className={cls} style={style}>
              <div className="card__header"><div className="card__label">{card.label}</div></div>
              <div className="card__content">
                <h2 className="card__title">{card.title}</h2>
                <p className="card__description">{card.description}</p>
              </div>
            </div>
          );
        })}
      </BentoCardGrid>
    </>
  );
};

export default MagicBento;