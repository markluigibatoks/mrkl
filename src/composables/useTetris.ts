import { Container, Graphics, utils } from "pixi.js";

export interface ITetromino {
  shape: number[][];
}

export interface ITetrominoes {
  shapes: ITetromino[];
}

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

export class Tetris extends Container implements IRandomBag {
  currentPosition: IPosition;
  startingPosition: IPosition;
  bag: ITetrominoes[];
  currentTetrominoes: ITetrominoes | undefined;
  gridMatrix: Grid[][];
  colorBank: string[];
  startInterval;

  constructor() {
    super();

    const rows = 20;
    const columns = 10;
    const size = 24;
    this.startingPosition = {
      x: 4,
      y: 0,
    };
    this.gridMatrix = [];
    this.colorBank = [
      "#ffffff",
      "#00ffff",
      "#0000ff",
      "#ffaa00",
      "#ffff00",
      "#00ff00",
      "#9900ff",
      "#ff0000",
    ];
    this.currentPosition = { ...this.startingPosition };
    this.bag = [];
    this.currentTetrominoes = undefined;

    const board = new Graphics();
    board.lineStyle(1, 0x000000, 1, 1);
    board.beginFill(0xffffff, 1);
    board.drawRect(0, 0, columns * size, rows * size);
    board.endFill();

    this.addChild(board);

    for (let i = 0; i < 10; i++) {
      const row = [];
      for (let j = 0; j < rows; j++) {
        const grid = new Grid(size, size);
        grid.position.set(i * size, j * size);

        row.push(grid);
        this.addChild(grid);
      }
      this.gridMatrix.push(row);
    }

    this.sortableChildren = true;

    this.init();

    this.startInterval = setInterval(() => {
      if (this.isFreeze(this.currentTetrominoes!.shapes[0].shape)) {
        this.reset();
        this.draw(this.currentTetrominoes!.shapes[0].shape);
      }

      this.undraw(this.currentTetrominoes!.shapes[0].shape);
      this.currentPosition.y += 1;
      this.draw(this.currentTetrominoes!.shapes[0].shape);
    }, 1000);
  }

  init() {
    this.populateRandomBag(10);

    this.currentTetrominoes = this.bag.shift();

    this.draw(this.currentTetrominoes!.shapes[0].shape);
  }

  populateRandomBag(size: number) {
    for (let i = 0; i < size; i++) {
      this.bag.push(this.randomTetrominoes());
    }
  }

  randomTetrominoes(): ITetrominoes {
    const tetrominoes = ["I", "J", "L", "O", "S", "T", "Z"];
    const index = Math.floor(Math.random() * 7);

    return new TetrominoFactory().getTetromino(tetrominoes[index])!;
  }

  draw(shape: number[][]) {
    const position = this.currentPosition;
    shape.forEach((yValue, yIndex) => {
      yValue.forEach((xValue, xIndex) => {
        try {
          this.gridMatrix[position.x + xIndex][position.y + yIndex].tint =
            !xValue
              ? utils.string2hex(this.colorBank[0])
              : utils.string2hex(this.colorBank[xValue]);
        } catch {
          console.log("Out of Bounds");
        }
      });
    });
  }

  reset() {
    this.currentPosition = { ...this.startingPosition };
    this.currentTetrominoes = this.bag.shift();

    if (this.bag.length <= 2) {
      this.populateRandomBag(10);
    }
  }

  isFreeze(shape: number[][]) {
    return shape.some((yValue, yIndex) => {
      return yValue.some((xValue, xIndex) => {
        return !xValue ? this.currentPosition.y + yIndex >= 20 : false;
      });
    });

    /**
     * Freeze the tetromino
     *  - check if yValue is >= rows
     *  - check if some parts of the shape will collide with another tetrominoes
     * reset currentPosition
     * currentTetrominoes = shift 1 Tetrominoes from RandomBag
     * Populate the bag if there are 2 left in the bag
     */
  }

  undraw(shape: number[][]) {
    const position = this.currentPosition;

    shape.forEach((yValue, yIndex) => {
      yValue.forEach((xValue, xIndex) => {
        this.gridMatrix[position.x + xIndex][position.y + yIndex].tint =
          utils.string2hex(this.colorBank[0]);
      });
    });
  }
}
