import { Container, Graphics } from "pixi.js";

export interface ITetromino {
  shape: number[][];
}

export interface ITetrominoes {
  shapes: ITetromino[];
}

export interface IRandomBag {
  bag: ITetromino[];
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

export class Tetromino implements ITetromino {
  shape: number[][];

  constructor(shape: number[][]) {
    this.shape = shape;
  }
}

export class Tetrominoes implements ITetrominoes {
  shapes: ITetromino[];

  constructor(shapes: ITetromino[]) {
    this.shapes = shapes;
  }
}

export class I implements ITetrominoes {
  shapes: ITetromino[];

  constructor() {
    this.shapes = [
      new Tetromino([
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ]),
      new Tetromino([
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
      ]),
      new Tetromino([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
      ]),
      new Tetromino([
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
      ]),
    ];
  }
}

export class J implements ITetrominoes {
  shapes: ITetromino[];

  constructor() {
    this.shapes = [
      new Tetromino([
        [2, 0, 0],
        [2, 2, 2],
        [0, 0, 0],
      ]),
      new Tetromino([
        [0, 2, 2],
        [0, 2, 0],
        [0, 2, 0],
      ]),
      new Tetromino([
        [0, 0, 0],
        [2, 2, 2],
        [0, 0, 2],
      ]),
      new Tetromino([
        [0, 2, 0],
        [0, 2, 0],
        [2, 2, 0],
      ]),
    ];
  }
}

export class L implements ITetrominoes {
  shapes: ITetromino[];

  constructor() {
    this.shapes = [
      new Tetromino([
        [0, 0, 3],
        [3, 3, 3],
        [0, 0, 0],
      ]),
      new Tetromino([
        [0, 3, 0],
        [0, 3, 0],
        [0, 3, 3],
      ]),
      new Tetromino([
        [0, 0, 0],
        [3, 3, 3],
        [3, 0, 0],
      ]),
      new Tetromino([
        [3, 3, 0],
        [0, 3, 0],
        [0, 3, 0],
      ]),
    ];
  }
}

export class O implements ITetrominoes {
  shapes: ITetromino[];

  constructor() {
    this.shapes = [
      new Tetromino([
        [0, 4, 4, 0],
        [0, 4, 4, 0],
        [0, 0, 0, 0],
      ]),
      new Tetromino([
        [0, 4, 4, 0],
        [0, 4, 4, 0],
        [0, 0, 0, 0],
      ]),
      new Tetromino([
        [0, 4, 4, 0],
        [0, 4, 4, 0],
        [0, 0, 0, 0],
      ]),
      new Tetromino([
        [0, 4, 4, 0],
        [0, 4, 4, 0],
        [0, 0, 0, 0],
      ]),
    ];
  }
}

export class S implements ITetrominoes {
  shapes: ITetromino[];

  constructor() {
    this.shapes = [
      new Tetromino([
        [0, 5, 5],
        [5, 5, 0],
        [0, 0, 0],
      ]),
      new Tetromino([
        [0, 5, 0],
        [0, 5, 5],
        [0, 0, 5],
      ]),
      new Tetromino([
        [0, 0, 0],
        [0, 5, 5],
        [5, 5, 0],
      ]),
      new Tetromino([
        [5, 0, 0],
        [5, 5, 0],
        [0, 5, 0],
      ]),
    ];
  }
}

export class T implements ITetrominoes {
  shapes: ITetromino[];

  constructor() {
    this.shapes = [
      new Tetromino([
        [0, 6, 0],
        [6, 6, 6],
        [0, 0, 0],
      ]),
      new Tetromino([
        [0, 6, 0],
        [0, 6, 6],
        [0, 6, 0],
      ]),
      new Tetromino([
        [0, 0, 0],
        [6, 6, 6],
        [0, 6, 0],
      ]),
      new Tetromino([
        [0, 6, 0],
        [6, 6, 0],
        [0, 6, 0],
      ]),
    ];
  }
}

export class Z implements ITetrominoes {
  shapes: ITetromino[];

  constructor() {
    this.shapes = [
      new Tetromino([
        [7, 7, 0],
        [0, 7, 7],
        [0, 0, 0],
      ]),
      new Tetromino([
        [0, 0, 7],
        [0, 7, 7],
        [0, 7, 0],
      ]),
      new Tetromino([
        [0, 0, 0],
        [7, 7, 0],
        [0, 7, 7],
      ]),
      new Tetromino([
        [0, 7, 0],
        [7, 7, 0],
        [7, 0, 0],
      ]),
    ];
  }
}

export class TetrominoFactory {
  getTetromino(type: string): ITetrominoes | undefined {
    if (type === "I") {
      return new I();
    } else if (type === "J") {
      return new J();
    } else if (type === "L") {
      return new L();
    } else if (type === "O") {
      return new O();
    } else if (type === "S") {
      return new S();
    } else if (type === "T") {
      return new T();
    } else if (type === "Z") {
      return new Z();
    }

    return undefined;
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
