export const htmlElement = document.querySelector('html');
export const getPageDimensions = () => ({
  width: htmlElement.offsetWidth,
  height: htmlElement.offsetHeight,
});

export const setUpCanvases = ({
  entryPoint,
  canvasNames,
  initialWidth,
  initialHeight,
}) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const canvasName of canvasNames) {
    const newCanvas = document.createElement('canvas');
    newCanvas.id = canvasName;
    newCanvas.width = initialWidth;
    newCanvas.height = initialHeight;
    newCanvas.style.display = `block`;
    newCanvas.style.position = `absolute`;
    newCanvas.style.zIndex = '-100';
    entryPoint.appendChild(newCanvas);
  }
};

export const clearCanvases = (pageDimensions, ...canvasArr) => {
  // eslint-disable-next-line no-param-reassign
  pageDimensions = getPageDimensions();
  const { width, height } = pageDimensions;
  // eslint-disable-next-line no-restricted-syntax
  for (const canvas of canvasArr) {
    canvas.width = width;
    canvas.height = height;
  }
};

export const animate = (pageDimensions, particleArray) => {
  requestAnimationFrame(() => animate(pageDimensions, particleArray));
  const pCanvas = document.querySelector('#particles');
  const tCanvas = document.querySelector('#trails');
  if (pCanvas && tCanvas) {
    // Re-render on screen canvases
    clearCanvases(pageDimensions, pCanvas, tCanvas);

    if (
      particleArray &&
      Array.isArray(particleArray) &&
      particleArray.length > 0
    ) {
      // eslint-disable-next-line no-restricted-syntax
      for (const particle of particleArray) {
        particle.update();
      }
    }
  }
};

export const getRandInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const createOffScreenCanvas = (str, width, height) => {
  const finalCanvasName = `${str}OffscreenCanvas`;
  let canvas = {};
  canvas = document.createElement('canvas');
  canvas.id = finalCanvasName;
  canvas.width = width;
  canvas.height = height;
  return canvas;
};
