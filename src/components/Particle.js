import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          color: {
            value: "#64ffda",
          },
          line_linked: {
            enable: false,
          },
          move: {
            direction: "none",
            speed: 0.3,
            random: true,
            out_mode: "out",
          },
          size: {
            value: 2,
            random: true,
          },
          opacity: {
            value: 0.4,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.1,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: false,
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
