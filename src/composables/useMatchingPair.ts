import { Container, Sprite, Assets } from "pixi.js";
import gsap from "@/composables/useGSAP";
import { AssetManager } from "@/composables/useAssetManager";

export interface ICard {
  value: number;
  frontImage: string;
  backImage: string;
  isFlip: boolean;
  timeline: gsap.timeline;

  flip(): gsap.timeline;
  fadeIn(): gsap.timeline;
}

export class Card extends Sprite implements ICard {
  value: number;
  frontImage: string;
  backImage: string;
  isFlip: boolean;
  timeline: gsap.timeline;

  constructor(value: number, frontImage: string, backImage: string) {
    super(AssetManager.bundle.matchingpair[backImage]);

    this.value = value;
    this.frontImage = frontImage;
    this.backImage = backImage;
    this.isFlip = false;
    this.timeline = gsap.timeline();

    this.cursor = "pointer";
    this.interactive = true;
    this.anchor.set(0.5);
  }

  flip(): gsap.timeline {
    const texture = this.isFlip ? this.backImage : this.frontImage;

    const timeline = gsap.timeline();

    timeline.to(this, {
      pixi: {
        width: 0,
      },
      ease: "power4",
      duration: 0.5,
    });

    timeline.set(this, {
      pixi: {
        texture: AssetManager.bundle.matchingpair[texture],
      },
    });

    timeline.to(this, {
      pixi: {
        width: this.texture.width,
      },
      ease: "power4",
      duration: 0.5,
    });

    timeline.set(this, {
      isFlip: !this.isFlip,
    });

    return timeline;
  }

  fadeIn() {
    throw new Error("Method not implemented.");
  }
}

export class MatchingPair extends Container {
  pairs: Container[];
  openedCards: Card[];
  cards: Card[];

  constructor(size: number) {
    super();

    this.cards = [];
    this.openedCards = [];
    this.pairs = [];

    for (let i = 1; i <= 10; i++) {
      this.pairs.push(this.createCard(i, `${i}`, "back"));
      this.pairs.push(this.createCard(i, `${i}`, "back"));
    }

    this.shuffleCards();
    this.positionItems(10);

    this.on("insert" as any, () => {
      if (!(this.openedCards.length >= 2)) {
        return;
      }

      if (this.isPair()) {
        this.disableCard();
        this.isWin()
          ? AssetManager.bundle.sounds["good-result"].play()
          : AssetManager.bundle.sounds["yay"].play();
      } else {
        AssetManager.bundle.sounds["cartoon-hop"].play();
        this.openedCards.map((card) => card.flip());
        this.clearOpenedCards();
      }
    });

    this.addChild(...this.pairs);
    this.sortableChildren = true;
  }

  isWin(): boolean {
    return this.cards.every((card) => card.isFlip);
  }

  clearOpenedCards() {
    this.openedCards = [];
  }

  disableCard() {
    this.openedCards.map((card) => {
      card.interactive = false;
      card.cursor = "default";
    });
    this.clearOpenedCards();
  }

  isPair(): boolean {
    return this.openedCards[0].value === this.openedCards[1].value;
  }

  insertCard(card: Card) {
    if (!(this.openedCards.length >= 2)) {
      this.openedCards.push(card);
    }
  }

  positionItems(gap: number) {
    let xPosition = 0,
      yPosition = 0;

    this.pairs.map((card, index) => {
      xPosition += card.width + gap;

      card.position.set(xPosition, yPosition);

      if ((index + 1) % 5 === 0) {
        xPosition = 0;
        yPosition += card.height + gap;
      }
    });
  }

  createCard(key, frontImage, backImage) {
    const container = new Container();
    container.sortableChildren = true;

    const card = new Card(key, frontImage, backImage);
    this.cards.push(card);
    container.addChild(card);
    card.position.set(container.width * 0.5, container.height * 0.5);

    container.on("pointerdown", () => {
      if (card.isFlip) return;

      AssetManager.bundle.sounds["select-sound"].play();
      const timeline = gsap.timeline({
        onComplete: () => {
          this.insertCard(card);
          this.emit("insert" as any);
        },
      });
      timeline.add(card.flip());
    });

    return container;
  }

  shuffleCards() {
    this.pairs.sort(() => Math.random() - 0.5);
  }
}
