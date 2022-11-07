import { Container, Sprite } from "pixi.js";
import gsap from "@/composables/useGSAP";
import { AssetManager } from "@/composables/useAssetManager";

export interface ICard {
  value: string;
  frontImage: string;
  backImage: string;

  flip(): typeof gsap.timeline;
  fadeIn(): typeof gsap.timeline;
}

export class Card extends Sprite implements ICard {
  value: string;
  frontImage: string;
  backImage: string;

  constructor(value: string, frontImage: string, backImage: string) {

    super(AssetManager.bundle[backImage]);

    this.value = value;
    this.frontImage = frontImage;
    this.backImage = backImage;

  }

  flip() {
    throw new Error("Method not implemented.");
  }

  fadeIn() {
    throw new Error("Method not implemented.");
  }
}

export class MatchingPair extends Container {
  card: Card;
  pairs: Card[];
  constructor(size: number) {
    super();

    this.pairs = [];

    for (let i = 0; i < size; i++) {
      this.pairs.push(new Card("value", "frontImage", "backImage"));
    }

    // TODO: Add Cards in a table-like manner
    this.sortableChildren = true;
  }

  shuffleCards() {
    throw new Error("Method not implemented.");
  }
}
