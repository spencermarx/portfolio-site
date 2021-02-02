export default class CanvasBase {
  constructor(options) {
    this.pCanvas = document.querySelector("#particles");
    this.tCanvas = document.querySelector("#trails");
    this.tOffscreenCanvas = options.tOffscreenCanvas;
    this.pCtx = this.pCanvas.getContext("2d");
    this.tCtx = this.tCanvas.getContext("2d");
    this.tOffscreenCtx = this.tOffscreenCanvas.getContext("2d");
    this.canvasWidth = this.pCanvas.width;
    this.canvasHeight = this.pCanvas.height;
  }
}