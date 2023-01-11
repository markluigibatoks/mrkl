import useGetKey from "../composables/useGetKey";

export interface IPlayer {
  name: string;
  score: number;
  hand: "Scissor" | "Rock" | "Paper" | -1;
}

export class Player implements IPlayer {
  name: string;
  score: number;
  hand: "Scissor" | "Rock" | "Paper" | -1;

  constructor(name: string) {
    this.name = name;
    this.score = 0;
    this.hand = -1;
  }
}

export const move = {
  Scissor: 1,
  Rock: 2,
  Paper: 3,
  default: -1,
};

export class RockPaperScissor {
  player1: IPlayer;
  player2: IPlayer;

  constructor(name: string) {
    this.player1 = new Player(name);
    this.player2 = new Player("House");
  }

  shoot(player1: IPlayer, player2: IPlayer) {
    let winner: IPlayer | "TIE";
    const player = useGetKey(player1.hand, move);
    const house = useGetKey(player2.hand, move);

    switch (Math.abs(player - house)) {
      case 0:
        winner = "TIE";
        break;
      case 1:
        winner = player > house ? player1 : player2;
        break;
      case 2:
        winner = player < house ? player1 : player2;
        break;
      default:
        winner = "TIE";
        break;
    }

    if (winner !== "TIE") ++winner.score;

    return winner;
  }

  reset() {
    this.player1.score = 0;
    this.player2.score = 0;
    this.player1.hand = -1;
    this.player2.hand = -1;
  }

  clear() {
    this.player1.hand = -1;
    this.player2.hand = -1;
  }
}
