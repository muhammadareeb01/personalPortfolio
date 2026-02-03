import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          color: {
            value: ["#4a90e2", "#60a5fa", "#f5a623"],
          },
          line_linked: {
            enable: true,
            opacity: 0.06,
            color: "#4a90e2",
            distance: 150,
            width: 1,
          },
          move: {
            direction: "none",
            speed: 0.5,
            random: true,
            out_mode: "out",
          },
          size: {
            value: 2.5,
            random: true,
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 0.8,
              opacity_min: 0.1,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 0.4,
              },
            },
            push: {
              particles_nb: 3,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
