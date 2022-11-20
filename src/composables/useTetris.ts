import { Container, Graphics } from "pixi.js";

// TODO: Create ITetrominoes
// TODO: Create IRandomBag
// TODO: Create IGrid

export class Tetris extends Container {
  constructor() {
    super();

    const rows = 20;
    const columns = 10;
    const size = 24;

    const matrixGrids = [];
    const matrixValue = [];

    const board = new Graphics();
    board.lineStyle(1, 0x000000, 1, 1);
    board.beginFill(0xffffff, 1);
    board.drawRect(0, 0, columns * size, rows * size);
    board.endFill();

    this.addChild(board);

    for (let i = 0; i < 10; i++) {
      const array = [];
      const value = [];
      for (let j = 0; j < rows; j++) {
        const grid = new Graphics();
        grid.lineStyle(1, 0x000000, 1, 0);
        grid.beginFill(0xffffff, 1);
        grid.drawRect(0, 0, size, size);
        grid.endFill();

        grid.position.set(i * size, j * size);

        array.push(grid);
        this.addChild(grid);
        value.push(0);
      }
      matrixGrids.push(array);
      matrixValue.push(value);
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
}
