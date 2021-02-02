import React, { useEffect, useState } from 'react';
import _debounce from 'lodash.debounce';
import Particle from './classes/Particle.class';
import * as particleUtils from './helpers/particles.helper';

const wrapperStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  zIndex: -100,
};

const particleBaseOptions = {
  motion: {
    minimumSegmentLength: 200,
    maximumSegmentLength: 400,
    speed: 1,
  },
  particle: {
    buffer: 20,
    radius: 5,
  },
  trail: {
    color: '#C1C1C105',
    radius: 1,
  },
};

let pageDimensions;

export default function Particles({ count, colors }) {
  const [particles] = useState([]);

  useEffect(() => {
    pageDimensions = particleUtils.getPageDimensions();
    const entryPoint = document.querySelector('#particles-entry');
    const canvasNames = ['trails', 'particles'];
    const { width: initialWidth, height: initialHeight } = pageDimensions;

    particleUtils.setUpCanvases({
      entryPoint,
      canvasNames,
      initialWidth,
      initialHeight,
    });

    const tOffscreenCanvas = particleUtils.createOffScreenCanvas(
      't',
      initialWidth,
      initialHeight,
    );

    if (!particles || particles.length < 1) {
      for (let i = 0; i < count; i += 1) {
        let optionsClone = { ...particleBaseOptions };
        const colorIndex = particleUtils.getRandInt(0, colors.length - 1);
        optionsClone = {
          ...optionsClone,
          particle: {
            ...optionsClone.particle,
            color: colors[colorIndex],
          },
          tOffscreenCanvas,
        };
        particles.push(new Particle(optionsClone));
      }
    }

    window.addEventListener('click', function() {
      // eslint-disable-next-line no-restricted-syntax
      for (const particle of particles) {
        particle.changeDirection({ switchAxis: true });
      }
    });
    window.addEventListener(
      'resize',
      _debounce(function() {
        const pCanvas = document.querySelector('#particles');
        const tCanvas = document.querySelector('#trails');
        particleUtils.clearCanvases(
          pageDimensions,
          pCanvas,
          tCanvas,
          tOffscreenCanvas,
        );
        // eslint-disable-next-line no-restricted-syntax
        for (const particle of particles) {
          particle.init();
        }
      }, 500),
    );

    particleUtils.animate(pageDimensions, particles);
  });
  return (
    <>
      <div id="particles-entry" style={wrapperStyle} />
    </>
  );
}
