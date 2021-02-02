export default {
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 1000
              }
            },
            color: {
              value: "#00000040"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#00000040"
              },
    },
            opacity: {
              value: 0.4,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
      }
    },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
      }
    },
            line_linked: {
              enable_auto: true,
              distance: 100,
              color: "#6c6c6c",
              opacity: 1,
              width: 1,
              condensed_mode: {
                enable: true,
                rotateX: 600,
                rotateY: 600
      }
    },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
      }
    }
  },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true
      },
              onclick: {
                enable: false
      },
              resize: true
    }
  },
          retina_detect: true
}