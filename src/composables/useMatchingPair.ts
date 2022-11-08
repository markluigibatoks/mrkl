import { Container, Sprite, utils } from "pixi.js";
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
  openedCards: Card[]
  cardEvent: utils.EventEmitter

  constructor(size: number) {
    super();

    this.pairs = [];

    for (let i = 0; i < size; i++) {
      const card = new Card("value", "frontImage", "backImage")

      card.on("pointerdown", () => {
        this.insertCard(card)
        this.cardEvent.emit('insert')
      })

      this.pairs.push(card);
    }

    this.cardEvent.on('insert', () => {

      this.isPair() ? this.disableCard() : this.clearOpenedCards()
    })

    // TODO: Add Cards in a table-like manner
    this.sortableChildren = true;
  }

  clearOpenedCards (){
    this.openedCards = []
  }

  disableCard (){
    this.openedCards.map(card => {
      card.interactive = false
      card.cursor = null
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

  shuffleCards() {
    this.pairs.sort(() => Math.random()-0.5)
  }
}
