import { ShockwaveFilter, BevelFilter } from "pixi-filters";
import { Container, Sprite, filters, WRAP_MODES, Text } from "pixi.js";
import { AssetManager } from "../composables/useAssetManager";
import { SceneManager } from "../composables/useSceneManager";

export class MainView extends Container {
  #displacementSprite;
  #ripples;
  #mouseRipple;
  constructor() {
    super();

    const numberOfRipples = 10;
    this.#ripples = [];

    for (let i = 0; i < numberOfRipples; i++) {
      const ripple = new ShockwaveFilter(
        [
          Math.random() * SceneManager.width,
          Math.random() * SceneManager.height,
        ],
        {
          amplitude: Math.random() * 100 + 1,
          wavelength: Math.random() * 20 + 1,
          brightness: 1,
          speed: 1.5,
          radius: Math.random() * 60 + 1,
        },
        0
      );
      this.#ripples.push(ripple);
    }

    this.#mouseRipple = new ShockwaveFilter(
      [Math.random() * SceneManager.width, Math.random() * SceneManager.height],
      {
        amplitude: 100,
        wavelength: 10,
        brightness: 1,
        speed: 2,
        radius: 100,
      },
      0
    );

    const background = new Sprite(AssetManager.bundle["pexels-jaymantri-5412"]);
    this.#displacementSprite = new Sprite(
      AssetManager.bundle["displacement-map"]
    );

    this.#displacementSprite.texture.baseTexture.wrapMode = WRAP_MODES.REPEAT;
    const displacementFilter = new filters.DisplacementFilter(
      this.#displacementSprite
    );
    this.#displacementSprite.position = background.position;
    displacementFilter.padding = 10;
    displacementFilter.scale.x = 30;
    displacementFilter.scale.y = 60;

    background.filters = [displacementFilter];

    this.filters = [this.#mouseRipple, ...this.#ripples];

    const mrklText = new Text("mrkl", {
      fontSize: 120,
      fill: "#e91e63",
      fontWeight: "bold",
      trim: true,
      dropShadow: true,
    });
    mrklText.anchor.set(0.5);

    const bevelFilter = new BevelFilter();

    const webDevText = new Text("Web Developer", {
      fontSize: 40,
      fill: "#cccccc",
      fontWeight: "bold",
      trim: true,
      dropShadow: true,
    });
    webDevText.anchor.set(0.5);
    webDevText.position.y = mrklText.height;

    const textContainer = new Container();
    textContainer.addChild(mrklText);
    textContainer.addChild(webDevText);
    let screenWidth = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    textContainer.position.set(
      SceneManager.width * 0.5,
      screenWidth > 980
        ? SceneManager.height * 0.5 - textContainer.height + 74
        : SceneManager.height * 0.5 - textContainer.height / 4
    );

    textContainer.sortableChildren = true;
    textContainer.filters = [bevelFilter];

    this.addChild(background);
    this.addChild(this.#displacementSprite);
    this.addChild(textContainer);

    this.sortableChildren = true;

    this.interactive = true;

    this.on("pointermove", (event) => {
      this.#mouseRipple.center = [event.globalX, event.globalY];
    });

    window.addEventListener("resize", () => {
      screenWidth = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      );

      if (screenWidth > 980) {
        textContainer.position.y =
          SceneManager.height * 0.5 - textContainer.height + 74;
      } else {
        textContainer.position.y =
          SceneManager.height * 0.5 - textContainer.height / 4;
      }
    });

    SceneManager.app.ticker.add(() => {
      this.#displacementSprite.x++;
      if (this.#displacementSprite.x > this.#displacementSprite.width) {
        this.#displacementSprite.x = 0;
      }

      for (let i = 0; i < numberOfRipples; i++) {
        this.createRipple(this.#ripples[i], Math.random() * 60 + 1);
      }

      this.createRipple(this.#mouseRipple, 60);
    });
  }

  createRipple(ripple, allotedTime) {
    ripple.time += 0.5;

    if (ripple.time > allotedTime) {
      ripple.time = 0;

      ripple.center = [
        Math.random() * SceneManager.width,
        Math.random() * SceneManager.height,
      ];
    }
  }
}
