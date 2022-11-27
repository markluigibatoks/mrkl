import { Container, Text } from "pixi.js";
import { SceneManager } from "@/composables/useSceneManager";

export class TextScene extends Container {
  constructor() {
    super();

    const name = new Text("mrkl", {
      fontWeight: "bold",
      fontSize: 250,
      fontFamily: "Arial",
      fill: "#ffffff",
      align: "center",
    });

    name.anchor.set(0.5);
    name.position.x = SceneManager.width / 2;
    name.position.y = SceneManager.height / 2;

    this.addChild(name);

    this.sortableChildren = true;
  }
}
