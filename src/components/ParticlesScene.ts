import { Container, Sprite, Texture, ParticleContainer } from "pixi.js";
import { SceneManager } from "@/composables/useSceneManager";
import { Particle } from "@/composables/useParticle";

export interface IMouse {
  x: number;
  y: number;
  radius: number;
}

export class ParticlesScene extends Container {
  particles: Particle[];
  particleContainer: ParticleContainer;
  mouse: IMouse;

  constructor() {
    super();

    this.mouse = {
      x: 0,
      y: 0,
      radius: 150,
    };

    this.on("pointerdown", (event) => {
      console.log((SceneManager.app.view as HTMLCanvasElement).offsetLeft);
      this.mouse.x = event.global.x;
      this.mouse.y = event.global.y;
    });
    this.interactive = true;
    this.cursor = "default";

    this.particles = [];

    const background = new Sprite(Texture.WHITE);
    background.width = SceneManager.width;
    background.height = SceneManager.height;
    background.tint = 0x000000;
    this.addChild(background);

    this.particleContainer = new ParticleContainer(1500, {
      scale: true,
      position: true,
      rotation: true,
      uvs: true,
      alpha: true,
    });

    this.addChild(this.particleContainer);

    this.sortableChildren = true;

    this.setup();

    SceneManager.app.ticker.add(() => {
      this.particles.forEach((particle) => {
        const dx = this.mouse.x - particle.x;
        const dy = this.mouse.y - particle.y;
        const distance = Math.hypot(dx, dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = this.mouse.radius;
        const force = (maxDistance - distance) / maxDistance;
        const directionX = forceDirectionX * force * particle.density;
        const directionY = forceDirectionY * force * particle.density;

        if (distance < this.mouse.radius) {
          particle.position.x -= directionX;
          particle.position.y -= directionY;
          particle.tint = 0xffff9f;
        } else {
          if (particle.position.x !== particle.baseX) {
            const dx = particle.position.x - particle.baseX;
            particle.position.x -= dx / 10;
          }
          if (particle.position.y !== particle.baseY) {
            const dy = particle.position.y - particle.baseY;
            particle.position.y -= dy / 10;
            particle.tint = 0xffffff;
          }
        }
      });
    });
  }

  setup() {
    for (let i = 0; i < 1500; i++) {
      const x = Math.random() * SceneManager.width;
      const y = Math.random() * SceneManager.height;
      const particle = new Particle(x, y);
      this.particles.push(particle);
      this.particleContainer.addChild(particle);
    }
  }
}
