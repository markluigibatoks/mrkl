import { Container, Sprite, utils } from "pixi.js";
import gsap from "@/composables/useGSAP";
import { AssetManager } from "@/composables/useAssetManager";

export interface ICard {
  value: number;
  frontImage: string;
  backImage: string;

  flip(): typeof gsap.timeline;
  fadeIn(): typeof gsap.timeline;
}

export class Card extends Sprite implements ICard {
  value: number;
  frontImage: string;
  backImage: string;
  isFlip: boolean

  constructor(value: number, frontImage: string, backImage: string) {

    super(AssetManager.bundle.matchingpair[backImage]);

    this.value = value;
    this.frontImage = frontImage;
    this.backImage = backImage;
    this.isFlip = false

    this.cursor = "pointer"
    this.interactive = true
    this.anchor.set(0.5)
  }

  flip () {
    const texture = this.isFlip ? this.backImage : this.frontImage
    this.isFlip = !this.isFlip

    const timeline = gsap.timeline()

    timeline.to(this, {
      pixi: {
        width: 0
      },
      ease: 'power4',
      duration: 0.5
    })

    timeline.set(this, {
      pixi: {
        texture: AssetManager.bundle.matchingpair[texture]
      }
    })

    timeline.to(this, {
      pixi: {
        width: this.texture.width
      },
      ease: 'power4',
      duration: 0.5
    })
  }

  fadeIn() {
    throw new Error("Method not implemented.");
  }
}

export class MatchingPair extends Container {
  card: Card;
  pairs: Container[];
  openedCards: Card[]
  cardEvent: utils.EventEmitter

  constructor(size: number) {
    super();

    this.openedCards = []
    this.pairs = [];
    this.cardEvent = new utils.EventEmitter()

    
    for (let i = 1; i <= 10; i ++) {
      this.pairs.push(this.createCard(i, `${i}`, "back"));
      this.pairs.push(this.createCard(i, `${i}`, "back"));
    }

    this.positionItems(10)

    this.cardEvent.on('insert', () => {
      if(!(this.openedCards.length >= 2)) {
        return
      }

      if (this.isPair()) {
        this.disableCard()
      } else {
        this.openedCards.map(card => card.flip())
        this.clearOpenedCards()
      }
    })

    this.addChild(...this.pairs)
    this.sortableChildren = true;
  }

  clearOpenedCards () {
    this.openedCards = []
  }

  disableCard (){
    this.openedCards.map(card => {
      card.interactive = false
      card.cursor = 'default'
    })
    this.clearOpenedCards()
  }

  isPair ():boolean {
    return this.openedCards[0].value === this.openedCards[1].value
  }

  insertCard (card: Card) {
    if(!(this.openedCards.length >= 2)) {
      this.openedCards.push(card)
    }
  }

  positionItems(gap: number) {
    let xPosition = 0, yPosition = 0

    this.pairs.map((card, index) => {
      xPosition += card.width + gap

      card.position.set(xPosition, yPosition)

      if((index + 1) % 5 === 0) {
        xPosition = 0
        yPosition += card.height + gap
      }
    })
  }

  createCard(key, frontImage, backImage) {
    const container = new Container()
    container.sortableChildren = true

    const card = new Card(key, frontImage, backImage)
    container.addChild(card)
    card.position.set(container.width * 0.5, container.height * 0.5)

    container.on("pointerdown", () => {
      this.insertCard(card)
      card.flip()
      this.cardEvent.emit('insert')
    })

    return container
  }

  shuffleCards() {
    this.pairs.sort(() => Math.random()-0.5)
  }
}
