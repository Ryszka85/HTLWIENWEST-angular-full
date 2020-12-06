import {TileRandomizer} from "./tile-randomizer";

export abstract class Tile{
  private _row: number;
  private _col: number;

  constructor(row: number, col: number) {
    this._row = row;
    this._col = col;
  }







  get row(): number {
    return this._row;
  }

  get col(): number {
    return this._col;
  }
}
