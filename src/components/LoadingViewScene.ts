import {
  Container,
  Graphics,
  Sprite,
  Texture,
  BitmapText,
  Text,
  utils,
} from "pixi.js";
import { SceneManager } from "@/composables/useSceneManager.ts";

export interface ILoadingView {
  backgroundColor: string;
}

export class LoadingView extends Container {
  background: Sprite;
  progressText: BitmapText;
  progressBar: Container;
  progressMask: Graphics;

  constructor() {
    super();

    this.background = new Sprite(Texture.WHITE);
    this.background.tint = 0x5a0820;
    this.background.width = SceneManager.width;
    this.background.height = SceneManager.height;

    const loadingText = new BitmapText("Loading...", {
      tint: utils.string2hex("#ffffff"),
      fontName: "defaultFont",
    });

    this.progressText = new BitmapText("0%", {
      tint: 0xffffff,
      fontName: "defaultFont",
    });

    this.progressBar = new Container();

    const progressBg = new Graphics();
    progressBg.lineStyle(1, utils.string2hex("#1a1a1a"), 1);
    progressBg.beginFill(utils.string2hex("#3c3c3c"), 1);
    progressBg.drawRoundedRect(0, 0, 200, 40, 8);
    progressBg.endFill();

    const progressFill = new Graphics();
    progressFill.lineStyle(1, utils.string2hex("#1a1a1a"), 1);
    progressFill.beginFill(utils.string2hex("#e91e63"), 1);
    progressFill.drawRoundedRect(0, 0, 200, 40, 8);
    progressFill.endFill();

    this.progressMask = new Graphics();
    this.progressMask.beginFill(utils.string2hex("#ffffff"), 1);
    this.progressMask.drawRect(0, 0, 200, 40);
    this.progressMask.endFill();

    progressFill.mask = this.progressMask;

    this.progressBar.addChild(progressBg, progressFill, this.progressMask);

    this.progressBar.sortableChildren = true;

    this.addChild(loadingText);
    this.addChild(this.progressText);
    this.addChild(this.background);
    this.addChild(this.progressBar);

    this.sortableChildren = true;
  }

  updateProgress(progress: number) {
    this.progressText.text = `${Number(progress.toFixed(2)) * 100}%`;
    this.progressMask.scale.x = progress;
  }
}
