import { Application, Container } from "pixi.js"

interface SceneOptions {
  canvasHolder?: any;
  width?: number;
  height?: number;
  resolution?: number;
  autoDensity?: boolean;
  backgroundColor?: number;
  backgroundAlpha?: number;
  antialias?: boolean;
  maxFPS?: number;
  minFPS?: number;
}

export class SceneManager {
  static app: Application

  public static get width (): number {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  }

  public static get height (): number {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  }

  private static currentScene: Container

  static initialize ({
    canvasHolder = document.querySelector("#app"),
    resolution = window.devicePixelRatio || 1,
    autoDensity = true,
    backgroundColor = 0x000000,
    backgroundAlpha = 1,
    antialias = true,
    maxFPS = 60,
    minFPS = 60
  }: SceneOptions) {

    console.log(canvasHolder)

    SceneManager.app = new Application({
      resolution,
      resizeTo: window,
      autoDensity,
      backgroundColor,
      backgroundAlpha,
      antialias
    })

    SceneManager.app.ticker.maxFPS = maxFPS
    SceneManager.app.ticker.minFPS = minFPS

    canvasHolder.appendChild(SceneManager.app.view)

    window.addEventListener("resize", SceneManager.resize)

    SceneManager.resize()
  }

  static resize (): void {
    if (SceneManager.app.view.style) {

      const view = SceneManager.app.view as HTMLCanvasElement
      view.style.width = `${SceneManager.width}px`
      view.style.height = `${SceneManager.height}px`
    }
  }

  static changeScene (container: Container) {
    if (SceneManager.currentScene) {
      SceneManager.app.stage.removeChild(SceneManager.currentScene)
      SceneManager.currentScene.destroy()
    }

    SceneManager.currentScene = container
    SceneManager.app.stage.addChild(SceneManager.currentScene)
  }
}
