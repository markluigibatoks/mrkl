import { Container, Sprite, Text } from "pixi.js";
import gsap from "@/composables/useGSAP";
import { AssetManager } from "@/composables/useAssetManager";

export interface ICard {
  value: number;
  frontImage: string;
  backImage: string;
  pairedImage: string;
  isFlip: boolean;
  timeline: gsap.timeline;

  flip(): gsap.timeline;
  fadeIn(duration: number): gsap.timeline;
  paired(): gsap.timeline;
}

export class Card extends Container implements ICard {
  value: number;
  frontImage: string;
  backImage: string;
  pairedImage: string;
  isFlip: boolean;
  timeline: gsap.timeline;
  pairedSprite: Sprite;
  cardSprite: Sprite;

  constructor(
    value: number,
    frontImage: string,
    backImage: string,
    pairedImage: string
  ) {
    super();

    this.value = value;
    this.frontImage = frontImage;
    this.backImage = backImage;
    this.pairedImage = pairedImage;
    this.isFlip = false;
    this.timeline = gsap.timeline();

    this.cardSprite = new Sprite(AssetManager.bundle[backImage]);
    this.cardSprite.width = 80;
    this.cardSprite.height = 80;
    this.cardSprite.anchor.set(0.5);
    this.cardSprite.position.set(this.width / 2, this.height / 2);

    this.cursor = "pointer";
    this.interactive = true;

    this.pairedSprite = new Sprite(AssetManager.bundle[pairedImage]);
    this.pairedSprite.width = 80;
    this.pairedSprite.height = 80;
    this.pairedSprite.anchor.set(0.5);
    this.pairedSprite.position.set(this.width / 2, this.height / 2);
    this.pairedSprite.alpha = 0;

    this.addChild(this.cardSprite);
    this.addChild(this.pairedSprite);

    this.sortableChildren = true;
  }

  flip(): gsap.timeline {
    const texture = this.isFlip ? this.backImage : this.frontImage;
    this.isFlip = !this.isFlip;

    const timeline = gsap.timeline();

    timeline.to(this.cardSprite, {
      pixi: {
        width: 0,
      },
      ease: "power4",
      duration: 0.5,
    });

    timeline.set(this.cardSprite, {
      pixi: {
        texture: AssetManager.bundle[texture],
      },
    });

    timeline.to(this.cardSprite, {
      pixi: {
        width: 80,
      },
      ease: "power4",
      duration: 0.5,
    });

    return timeline;
  }

  paired() {
    const timeline = gsap.timeline();

    timeline.set(this.pairedSprite, {
      pixi: {
        scale: 0,
        alpha: 1,
      },
    });

    timeline.to(this.pairedSprite, {
      pixi: {
        scale: 1,
      },
    });

    timeline.to(this.pairedSprite, {
      pixi: {
        scale: 1.3,
        alpha: 0.2,
      },
    });

    timeline.set(this.pairedSprite, {
      pixi: {
        scale: 0.1,
        alpha: 0,
      },
    });

    return timeline;
  }

  fadeIn(duration: number) {
    const timeline = gsap.timeline();

    timeline.set(this, {
      pixi: {
        alpha: 0,
        scale: 0,
      },
    });

    timeline.to(this, {
      pixi: {
        alpha: 1,
        scale: 1,
      },
      duration,
    });

    return timeline;
  }

  reset() {
    this.timeline.clear();
    this.isFlip = false;
    this.cardSprite.texture = AssetManager.bundle[this.backImage];
  }
}

export class MatchingPair extends Container {
  pairs: Container[];
  openedCards: Card[];
  cards: Card[];
  countdown: Text;
  resetSprite: Sprite;

  constructor(size: number) {
    super();

    this.cards = [];
    this.openedCards = [];
    this.pairs = [];
    this.countdown = new Text("3", {
      fill: 0xe91e63,
      fontFamily: "Roboto Regular",
      fontSize: 120,
      strokeThickness: 1,
      trim: true,
    });
    this.resetSprite = new Sprite(AssetManager.bundle["retry-button"]);
    this.resetSprite.scale.set(0.15);
    this.resetSprite.alpha = 0;
    this.resetSprite.cursor = "pointer";
    this.resetSprite.interactive = false;

    for (let i = 1; i <= size; i++) {
      this.pairs.push(this.createCard(i, `${i}`, "back", "paint-check"));
      this.pairs.push(this.createCard(i, `${i}`, "back", "paint-check"));
    }

    this.positionItems(10);

    this.on("insert" as any, () => {
      if (!(this.openedCards.length >= 2)) {
        return;
      }

      if (this.isPair()) {
        this.openedCards.forEach((card) => card.paired());
        this.disableCard();
        const isWin = this.isWin();
        isWin
          ? AssetManager.bundle["good-result"].play()
          : AssetManager.bundle["yay"].play();
        this.resetSprite.alpha = Number(isWin);
        this.resetSprite.interactive = isWin;
      } else {
        AssetManager.bundle["cartoon-hop"].play();
        this.openedCards.forEach((card) => card.flip());
        this.clearOpenedCards();
      }
    });

    this.resetSprite.on("pointerdown", () => {
      this.reset();
    });

    this.addChild(...this.pairs);
    this.addChild(this.countdown);
    this.addChild(this.resetSprite);
    this.sortableChildren = true;

    this.resetSprite.anchor.set(0.5);
    this.resetSprite.position.set(this.width / 2, this.height / 2);

    this.countdown.anchor.set(0.5);
    this.countdown.position.set(this.width / 2, this.height / 2);

    this.start();
  }

  reset() {
    this.openedCards = [];
    this.cards.forEach((card) => {
      card.reset();
      card.interactive = true;
      card.cursor = "pointer";
    });

    this.start();
  }

  hideCards() {
    this.cards.forEach((card) => {
      card.alpha = 0;
    });
  }

  start() {
    this.resetSprite.alpha = 0;
    this.resetSprite.interactive = false;

    this.hideCards();

    this.shuffleCards();

    this.positionItems(10);

    const timeline = gsap.timeline();

    this.countdownAnimation();
    this.pairs.forEach((pair) => {
      const card: Card = pair.children[0] as Card;
      timeline.add(card.fadeIn(3 / 20));
    });
  }

  countdownAnimation() {
    const timeline = gsap.timeline();

    timeline.set(this, {
      pixi: {
        interactiveChildren: false,
      },
    });

    for (let i = 3; i >= 1; i--) {
      timeline.set(this.countdown, {
        pixi: {
          text: i,
          scale: 1.5,
          alpha: 0,
        },
        onComplete: () => {
          AssetManager.bundle["boing"].play();
        },
      });

      timeline.to(this.countdown, {
        pixi: {
          alpha: 1,
          scale: 1,
        },
        duration: 1,
      });

      timeline.set(this.countdown, {
        pixi: {
          alpha: 0,
        },
      });
    }

    timeline.set(this, {
      pixi: {
        interactiveChildren: true,
      },
    });

    return timeline;
  }

  isWin(): boolean {
    return this.cards.every((card) => card.isFlip);
  }

  clearOpenedCards() {
    this.openedCards = this.openedCards.slice(2);
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
      card.position.set(xPosition, yPosition);

      xPosition += card.width + gap;
      if ((index + 1) % 5 === 0) {
        xPosition = 0;
        yPosition += card.height + gap;
      }
    });
  }

  createCard(key, frontImage, backImage, pairedImage) {
    const container = new Container();
    container.sortableChildren = true;

    const card = new Card(key, frontImage, backImage, pairedImage);
    card.alpha = 0;
    this.cards.push(card);
    container.addChild(card);
    card.position.set(container.width * 0.5, container.height * 0.5);

    container.on("pointerdown", () => {
      if (card.isFlip) return;

      AssetManager.bundle["select-sound"].play();
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
