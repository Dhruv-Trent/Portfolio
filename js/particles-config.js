tsParticles.load("tsparticles", {
    fullScreen: { enable: false },
    background: {
      color: {
        value: "#000000"
      }
    },
    particles: {
      number: {
        value: 90,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: "#fff"
      },
      shape: {
        type: "star"
      },
      opacity: {
        value: 0.8
      },
      size: {
        value: { min: 1, max: 5 }
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: {
          default: "bounce"
        }
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 40
        }
      }
    },
    detectRetina: true
  });
  