import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 300,
            },
          },
          line_linked: {
            enable: false,
            opacity: .05,
          },
          move: {
            direction: "top",
            speed: 100,
          },
          size: {
            value: 1.1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1.7,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
