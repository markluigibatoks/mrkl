import { Container, Graphics } from "pixi.js";

// TODO: Create ITetrominoes

export interface ITetrominoes {}

export interface IRandomBag {
  bag: ITetrominoes[];
}

export interface IGrid {
  value: number;
  colors: Record<string, number>;

  reset(): void;
}

export interface IPosition {
  x: number;
  y: number;
}

export class Grid extends Graphics implements IGrid {
  value: number;
  colors: Record<string, number>;

  constructor(w: number, h: number) {
    super();

    this.lineStyle(1, 0x000000, 1, 0);
    this.beginFill(0xffffff, 1);
    this.drawRect(0, 0, w, h);
    this.endFill();

    this.value = 0;

    this.colors = {
      0: 0xffffff,
    };
  }

  reset(): void {
    this.tint = this.colors[this.value];
  }
}

export class Tetris extends Container {
  currentPosition: IPosition;
  startingPosition: IPosition;
  constructor() {
    super();

    const rows = 20;
    const columns = 10;
    const size = 24;
    this.startingPosition = {
      x: 5,
      y: 0,
    };
    const matrixGrids = [];

    this.currentPosition = this.startingPosition;

    const board = new Graphics();
    board.lineStyle(1, 0x000000, 1, 1);
    board.beginFill(0xffffff, 1);
    board.drawRect(0, 0, columns * size, rows * size);
    board.endFill();

    this.addChild(board);

    for (let i = 0; i < 10; i++) {
      const array = [];
      for (let j = 0; j < rows; j++) {
        const grid = new Grid(size, size);
        grid.position.set(i * size, j * size);

        array.push(grid);
        this.addChild(grid);
      }
      matrixGrids.push(array);
    }

    this.sortableChildren = true;

    // Test
    matrixGrids[0][19].tint = 0x00ff00;
    matrixGrids[1][19].tint = 0x00ff00;
    matrixGrids[1][18].tint = 0x00ff00;
    matrixGrids[2][18].tint = 0x00ff00;

    matrixGrids[3][18].tint = 0xffff00;
    matrixGrids[3][19].tint = 0xffff00;
    matrixGrids[4][18].tint = 0xffff00;
    matrixGrids[4][19].tint = 0xffff00;

    matrixGrids[5][18].tint = 0xff0000;
    matrixGrids[6][18].tint = 0xff0000;
    matrixGrids[6][19].tint = 0xff0000;
    matrixGrids[7][19].tint = 0xff0000;

    matrixGrids[0][16].tint = 0xa020f0;
    matrixGrids[1][16].tint = 0xa020f0;
    matrixGrids[2][16].tint = 0xa020f0;
    matrixGrids[1][17].tint = 0xa020f0;
  }

  draw(shape: number[][]) {
    shape.forEach((yValue, yIndex) => {
      yValue.forEach((xValue, xIndex) => {
        // TODO: Fill the matrixGrid with shape values
        // TODO: Emit an event that a grid value has change
        console.log(xValue);
      });
    });
  }

  undraw(shape: number[][]) {
    shape.forEach((yValue, yIndex) => {
      yValue.forEach((xValue, xIndex) => {
        // TODO: Fill the matrixGrid with default values
        // TODO: Emit an event that a grid value has change
        console.log(0);
      });
    });
  }
}
