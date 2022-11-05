import { Application } from "pixi.js";

interface SceneOptions {
  canvasHolder?: any;
  width?: number;
  height?: number;
  resolution?: number;
  autoDensity?: boolean;
  backgroundColor?: number;
  antialias?: boolean;
  maxFPS?: number;
  minFPS?: number;
}

export class SceneManager {
  static app: Application;

  static width = 0;
  static height = 0;

  static initialize({
    canvasHolder = document.querySelector("#app"),
    width = 960,
    height = 540,
    resolution = window.devicePixelRatio || 1,
    autoDensity = true,
    backgroundColor = 0x000000,
    antialias = true,
    maxFPS = 60,
    minFPS = 60,
  }: SceneOptions) {
    SceneManager.width = width;
    SceneManager.height = height;

    SceneManager.app = new Application({
      width,
      height,
      resolution,
      autoDensity,
      backgroundColor,
      antialias,
    });

    SceneManager.app.ticker.maxFPS = maxFPS;
    SceneManager.app.ticker.minFPS = minFPS;

    canvasHolder.appendChild(SceneManager.app.view);

    window.addEventListener("resize", SceneManager.resize);

    SceneManager.resize();
  }

  static resize(): void {
    const screenWidth = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    const screenHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );

    let enlargedWidth = screenWidth;
    let enlargedHeight = screenHeight;

    if ((screenWidth * 9) / 16 > screenHeight) {
      enlargedWidth = (screenHeight * 16) / 9;
    } else {
      enlargedHeight = (screenWidth * 9) / 16;
    }

    if (screenWidth > 960 && screenHeight > 540) {
      enlargedWidth = screenWidth;
      enlargedHeight = (screenWidth * 9) / 16;
    }

    if (SceneManager.app.view.style) {
      const view = SceneManager.app.view as HTMLCanvasElement;
      view.style.width = `${enlargedWidth}px`;
      view.style.height = `${enlargedHeight}px`;
    }
  }
}
