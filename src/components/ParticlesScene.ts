import { Container, Sprite, Texture, ParticleContainer, Text } from "pixi.js";
import { SceneManager } from "@/composables/useSceneManager";
import { Particle } from "@/composables/useParticle";
import gsap from "@/composables/useGSAP";

export interface IMouse {
  x: number;
  y: number;
  radius: number;
}

export class ParticlesScene extends Container {
  particles: Particle[];
  particleContainer: ParticleContainer;
  mouse: IMouse;
  isReady: boolean;

  constructor() {
    super();

    this.isReady = false;

    const tmpCanvas = SceneManager.app.renderer.extract.canvas(
      SceneManager.app.stage
    );
    const imageData = tmpCanvas
      .getContext("2d", { willReadFrequently: true })
      .getImageData(
        0,
        0,
        SceneManager.app.renderer.width,
        SceneManager.app.renderer.height
      );

    let widthDiff = (SceneManager.width - tmpCanvas.width) / 2;
    let heightDiff = (SceneManager.height - tmpCanvas.height) / 2;

    if (widthDiff < 0) {
      widthDiff = 0;
    }

    if (heightDiff < 0) {
      heightDiff = 0;
    }

    this.mouse = {
      x: 0,
      y: 0,
      radius: 100,
    };

    this.on("pointermove", (event) => {
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
      rotation: false,
      uvs: false,
      alpha: true,
    });

    this.addChild(this.particleContainer);

    const legend = new Text('Mouse hover on the text "mrkl"', {
      fill: 0xffffff,
      fontSize: 16,
    });
    this.addChild(legend);
    legend.anchor.set(0.5, 0);
    legend.position.set(
      SceneManager.width / 2,
      SceneManager.height - legend.height - 10
    );
    legend.alpha = 0;

    this.sortableChildren = true;

    for (let y = 0; y < tmpCanvas.height; y += 8) {
      for (let x = 0; x < tmpCanvas.width; x += 8) {
        if (imageData.data[(y * imageData.width + x) * 4 + 3] > 128) {
          const particle = new Particle(x + widthDiff, y + heightDiff);
          this.particles.push(particle);
          this.particleContainer.addChild(particle);
        }
      }
    }

    this.animateParticles();

    SceneManager.app.ticker.add(() => {
      if (!this.isReady) {
        return;
      }

      legend.alpha += 0.005;
      if (legend.alpha >= 1) {
        legend.alpha = 0;
      }

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

  animateParticles() {
    const timeline = gsap.timeline();

    let xPosition = 0;
    let yPosition = 0;
    const gap = Math.round(
      (SceneManager.width * SceneManager.height) / 16 / this.particles.length
    );

    for (let i = 0; i < this.particles.length; i++) {
      timeline.to(
        this.particles[i],
        {
          pixi: {
            positionX: xPosition,
            positionY: yPosition,
          },
          duration: Math.random() * 2,
          delay: 2,
        },
        "start"
      );
      xPosition += gap;

      if (xPosition > 960) {
        yPosition += gap;
        xPosition = 0;
      }
    }

    for (let i = 0; i < this.particles.length; i++) {
      timeline.to(
        this.particles[i],
        {
          pixi: {
            positionX: Math.random() * SceneManager.width * (Math.random() + 1),
            positionY:
              Math.random() * SceneManager.height * (Math.random() + 1),
          },
          duration: 1,
        },
        "middle"
      );
    }

    for (let i = 0; i < this.particles.length; i++) {
      timeline.to(
        this.particles[i],
        {
          pixi: {
            positionX: this.particles[i].baseX,
            positionY: this.particles[i].baseY,
          },
          duration: Math.random() * 3,
        },
        "end"
      );
    }

    timeline.set(this, {
      isReady: true,
    });
  }
}
