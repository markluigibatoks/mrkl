import { Container, Sprite, filters, Assets } from "pixi.js";

export class LoadingView extends Container {
  #background;

  constructor() {
    super();

    console.log(
      import.meta.globEager("../assets/images/pexels-laker-6156377.jpg")
    );

    const images: any = Object.values(
      import.meta.glob("../assets/images/pexels-laker-6156377.jpg", {
        eager: true,
      })
    );

    console.log(images[0].default);
    const backgroundUrl = images[0].default;
    Assets.load("/images/pexels-laker-6156377.jpg").then((texture) => {
      this.#background = new Sprite(texture);
      this.addChild(this.#background);
    });

    this.sortableChildren = true;
  }
}
