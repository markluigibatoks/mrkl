import { sound } from "@pixi/sound";
import { Container, Sprite, Texture } from "pixi.js";
import { SceneManager } from "@/composables/useSceneManager";
import { AssetManager } from "@/composables/useAssetManager";
import { MatchingPair } from "@/composables/useMatchingPair";
import { MatchingPairLobby } from "@/components/MatchingPairLobbyScene";

export class MatchingPairScene extends Container {
  constructor() {
    super();

    let isMuted = false;

    const background = new Sprite(Texture.WHITE);
    background.width = SceneManager.width;
    background.height = SceneManager.height;
    background.tint = 0xf1f1f1;
    this.addChild(background);

    const matchingPair = new MatchingPair(10);

    this.addChild(matchingPair);

    matchingPair.position.set(
      this.width / 2 - matchingPair.width * 0.5,
      this.height / 2 - matchingPair.height * 0.5
    );

    const playAudioTexture = AssetManager.bundle["sound-button"];
    const playAudioPressedTexture = AssetManager.bundle["sound-button-pressed"];

    const audioSprite = new Sprite(playAudioTexture);
    audioSprite.scale.set(0.15);
    audioSprite.position.set(this.width - audioSprite.width - 10, 10);
    audioSprite.interactive = true;
    audioSprite.cursor = "pointer";

    audioSprite.on("pointerdown", () => {
      isMuted = !isMuted;
      audioSprite.texture = isMuted
        ? playAudioPressedTexture
        : playAudioTexture;

      isMuted ? sound.muteAll() : sound.unmuteAll();
    });
    this.addChild(audioSprite);

    const stopSprite = new Sprite(AssetManager.bundle["stop-button"]);
    stopSprite.scale.set(0.15);
    stopSprite.position.set(10, 10);
    stopSprite.interactive = true;
    stopSprite.cursor = "pointer";

    stopSprite.on("pointerdown", () => {
      SceneManager.changeScene(new MatchingPairLobby());
    });
    this.addChild(stopSprite);

    this.sortableChildren = true;
  }
}
