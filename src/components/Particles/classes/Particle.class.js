// TODO: Handle rendering within red zone

import CanvasBase from './BaseCanvas.class';
import * as particleUtils from '../helpers/particles.helper';

export default class Particle extends CanvasBase {
  constructor(options) {
    super(options);
    this.redZones = document.querySelectorAll('.particle-avoid');
    this.particleOptions = options.particle;
    this.trailOptions = options.trail;
    this.motionOptions = options.motion;
    this.motion = [];
    this.init();
  }

  init = () => {
    this.motion.push(this.getNewMotionState());
    const { x, y } = this.setInitialCoord();
    this.x = x;
    this.y = y;
  };

  getNewMotionState = () => ({
    distanceTraveled: 0,
    axis: '',
    positivity: 0,
  });

  setInitialCoord = () => {
    let coords;
    do {
      coords = {
        x: particleUtils.getRandInt(0, this.canvasWidth),
        y: particleUtils.getRandInt(0, this.canvasHeight),
      };
    } while (this.isInsideRedzone(coords));

    return coords;
  };

  isInsideRedzone = ({ x, y }) => {
    const { radius, buffer } = this.particleOptions;
    const { dt, db, dl, dr } = this.getParticleEdges(x, y, radius);
    // eslint-disable-next-line no-restricted-syntax
    for (const redZone of this.redZones) {
      const { top, bottom, left, right } = redZone.getBoundingClientRect();
      const isInsideRedZone =
        dl >= left - buffer &&
        dr <= right + buffer &&
        dt >= top - buffer &&
        db <= bottom + buffer;
      return isInsideRedZone;
    }
    return false;
  };

  getRandAxis = () => {
    return Math.random() >= 0.5 ? 'x' : 'y';
  };

  getPositivity = () => {
    return Math.random() >= 0.5 ? 1 : -1;
  };

  update = () => {
    this.handleDirection();
    this.handleMovement();
    this.drawParticle();
    this.drawTrail();
  };

  handleMovement = () => {
    const { speed } = this.motionOptions;
    // Increment
    this[this.motion[0].axis] += this.motion[0].positivity * speed;
    this.motion[0].distanceTraveled -= speed;
  };

  handleDirection = () => {
    const { buffer } = this.particleOptions;
    const offCanvasBuffer = buffer * 2;

    const hasLeftScreen =
      this.x <= 0 - offCanvasBuffer ||
      this.y <= 0 - offCanvasBuffer ||
      this.x >= this.canvasWidth + offCanvasBuffer ||
      this.y >= this.canvasHeight + offCanvasBuffer;

    // Has distance been reached?
    if (hasLeftScreen) {
      this.changeDirection({ reverse: true });
    } else if (this.motion[0].distanceTraveled <= 0) {
      this.changeDirection();
    }
    this.checkRedZones();
  };

  checkRedZones = () => {
    const { x, y } = this;
    const { buffer, radius } = this.particleOptions;

    // eslint-disable-next-line no-restricted-syntax
    for (const redZone of this.redZones) {
      const { top, bottom, left, right } = redZone.getBoundingClientRect();
      const { dt, db, dl, dr } = this.getParticleEdges(x, y, radius);

      // Approaching top moving down
      const approachingTop =
        dl >= left - buffer &&
        dr <= right + buffer &&
        top - db >= 0 &&
        top - db <= buffer;
      // Approaching bottom moving up
      const approachingBottom =
        dl >= left - buffer &&
        dr <= right + buffer &&
        db - bottom >= 0 &&
        db - bottom <= buffer;

      // Approaching left moving right
      const approachingLeft =
        db <= bottom + buffer &&
        dt >= top - buffer &&
        left - dr >= 0 &&
        left - dr <= buffer;
      // Approaching right moving left
      const approachingRight =
        db <= bottom + buffer &&
        dt >= top - buffer &&
        dl - right >= 0 &&
        dl - right <= buffer;

      if (
        approachingTop ||
        approachingBottom ||
        approachingLeft ||
        approachingRight
      ) {
        this.changeDirection({ reverse: true });
      }
    }
  };

  getParticleEdges = (x, y, radius) => ({
    dt: y - radius,
    db: y + radius,
    dl: x - radius,
    dr: x + radius,
  });

  getOppositeAxis = previousAxis => (previousAxis === 'x' ? 'y' : 'x');

  changeDirection = options => {
    let switchAxis;
    let reverse;

    if (options) {
      switchAxis = options.switchAxis;
      reverse = options.reverse;
    }
    let deliberateAxis = '';
    let positivity;
    // Track previous axis
    const previousAxis = this.motion[0].axis;

    if (switchAxis) {
      deliberateAxis = this.getOppositeAxis(previousAxis);
    }

    if (reverse) {
      deliberateAxis = previousAxis;
    }
    // Remove current motion object
    this.motion.shift();

    if (this.motion.length === 0) {
      this.motion.push(this.getNewMotionState());
      // Get new direction
      this.motion[0].axis = deliberateAxis || this.getRandAxis();

      // Is particle going to move in the same direction
      const sameDirection = this.motion[0].axis === previousAxis;

      if (sameDirection) {
        if (reverse) {
          positivity = this.motion[0].positivity === -1 ? 1 : -1;
        } else {
          positivity = this.motion[0].positivity;
        }
      } else {
        positivity = this.getPositivity();
      }

      this.motion[0].positivity = positivity;

      // Get new distance
      this.motion[0].distanceTraveled = particleUtils.getRandInt(
        this.motionOptions.minimumSegmentLength,
        this.motionOptions.maximumSegmentLength,
      );
    }
  };

  drawParticle = () => {
    this.pCtx.beginPath();
    this.pCtx.arc(
      this.x,
      this.y,
      this.particleOptions.radius,
      0,
      Math.PI * 2,
      true,
    );
    this.pCtx.fillStyle = this.particleOptions.color;
    this.pCtx.imageSmoothingEnabled = true;
    this.pCtx.fill();
    this.pCtx.closePath();
  };

  drawTrail = () => {
    this.tOffscreenCtx.beginPath();
    this.tOffscreenCtx.arc(
      this.x,
      this.y,
      this.trailOptions.radius,
      0,
      Math.PI * 2,
      true,
    );
    this.tOffscreenCtx.fillStyle = this.trailOptions.color;
    this.tOffscreenCtx.imageSmoothingEnabled = true;
    this.tOffscreenCtx.fill();
    this.tOffscreenCtx.closePath();
    this.tCtx.drawImage(this.tOffscreenCanvas, 0, 0);
  };
}
