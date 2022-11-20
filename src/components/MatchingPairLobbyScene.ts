import { Container, BitmapText, Text, Sprite } from "pixi.js";
import { SceneManager } from "@/composables/useSceneManager";
import { AssetManager } from "@/composables/useAssetManager";
import { MatchingPairScene } from "@/components/MatchingPairScene";

export class MatchingPairLobby extends Container {
  constructor() {
    super();

    const background = new Sprite(AssetManager.bundle["lobby-background"]);
    this.addChild(background);

    const playText = new BitmapText("Play", {
      fontName: "defaultFont",
    });
    const playButtonTexture = AssetManager.bundle["button"];
    const playButtonPressedTexture = AssetManager.bundle["button-pressed"];
    const playButtonSprite = new Sprite(playButtonTexture);
    playButtonSprite.scale.set(0.15);
    const playButton = new Container();
    playButton.addChild(playButtonSprite);
    playButton.addChild(playText);
    playText.anchor.set(0.5);
    playText.position.set(
      playButtonSprite.width * 0.5,
      playButtonSprite.height * 0.5
    );
    playButton.sortableChildren = true;

    playButton.interactive = true;
    playButton.cursor = "pointer";

    playButton.on("pointerdown", () => {
      playButtonSprite.texture = playButtonPressedTexture;

      setTimeout(() => {
        this.play();
      }, 50);
    });

    const matchingPairText = new Text("Matching Pair", {
      fontFamily: "Roboto Regular",
      fill: 0x000000,
      fontWeight: "bold",
      fontSize: 36,
    });

    const container = new Container();
    container.addChild(playButton);
    container.addChild(matchingPairText);
    playButton.position.x = matchingPairText.width / 2 - playButton.width / 2;
    playButton.position.y = matchingPairText.height + 50;

    container.sortableChildren = true;
    this.addChild(container);

    container.position.set(
      this.width * 0.5 - container.width / 2,
      this.height * 0.5 - container.height / 2
    );

    this.sortableChildren = true;
  }

  play() {
    SceneManager.changeScene(new MatchingPairScene());
  }
}
