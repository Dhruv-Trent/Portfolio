tsParticles.load("tsparticles", {
    fullScreen: { enable: true },
    background: {
      color: {
        value: "#181818"
      }
    },
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: "#fff"
      },
      shape: {
        type: ["circle", "square", "triangle", 'star']
      },
      opacity: {
        value: 0.8
      },
      size: {
        value: { min: 1, max: 3 }
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
  