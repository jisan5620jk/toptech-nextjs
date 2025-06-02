"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loading = () => {
  const loadingRef = useRef(null);
  const svgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const textEl = textRef.current;
    const tl = gsap.timeline({ onComplete: startStrokeAnimation });

    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    tl.to(textEl, {
      delay: 1.5,
      y: -100,
      opacity: 0,
      duration: 0.5,
    })
      .to(svg, {
        duration: 0.5,
        attr: { d: curve },
        ease: "power2.in",
      })
      .to(svg, {
        duration: 0.5,
        attr: { d: flat },
        ease: "power2.out",
      })
      .to(loadingRef.current, {
        y: -1500,
        duration: 0.6,
        ease: "power3.inOut",
      })
      .to(loadingRef.current, {
        zIndex: -1,
        display: "none",
        duration: 0,
      });

    function startStrokeAnimation() {
      // Placeholder for stroke animation logic
    }
  }, []);

  return (
    <div
      ref={loadingRef}
      className="fixed inset-0 flex items-center justify-center bg-transparent z-[99999] overflow-hidden"
    >
      <svg
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        className="absolute top-0 w-screen h-[110vh] fill-PrimaryColor-0"
      >
        <path ref={svgRef} d="M0,1005S175,995,500,995s500,5,500,5V0H0Z" />
      </svg>

      <div
        ref={textRef}
        className="text-2xl font-light tracking-[35px] uppercase font-Rajdhani text-white z-20 flex space-x-1"
      >
        {["L", "o", "a", "d", "i", "n", "g"].map((char, index) => (
          <span
            key={index}
            className="animate-pulse"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loading;
