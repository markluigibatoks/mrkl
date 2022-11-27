import { Sprite, Texture } from "pixi.js";

export interface IParticle {
  baseX: number;
  baseY: number;
  density: number;
}

export class Particle extends Sprite implements IParticle {
  baseX: number;
  baseY: number;
  density: number;

  constructor(x: number, y: number) {
    super(Texture.WHITE);

    this.position.x = x;
    this.position.y = y;

    this.baseX = x;
    this.baseY = y;

    this.density = Math.random() * 30 + 1;
  }
}
