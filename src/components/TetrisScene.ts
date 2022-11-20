import { Container, Sprite, Texture } from "pixi.js";
import { SceneManager } from "@/composables/useSceneManager";
import { Tetris } from "@/composables/useTetris";

export class TetrisScene extends Container {
  constructor() {
    super();

    const background = new Sprite(Texture.WHITE);
    background.width = SceneManager.width;
    background.height = SceneManager.height;
    background.tint = 0xf1f1f1;
    this.addChild(background);

    const tetris = new Tetris();
    tetris.position.set(1, 1);
    this.addChild(tetris);

    this.sortableChildren = true;
  }
}
